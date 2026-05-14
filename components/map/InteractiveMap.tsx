"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { useTheme } from "@/lib/theme-context";

type CSSVars = CSSProperties & Record<string, string>;

const SVG_URL = "/areas/kempmap.svg";


function normalizeSvgMarkup(markup: string) {
  return markup
    .replace(/<\?xml[\s\S]*?\?>\s*/i, "")
    .replace(/<!DOCTYPE[\s\S]*?>\s*/i, "")
    .replace(/<svg\s+/i, '<svg class="map-svg" ')
    .replace(/stroke:black/g, "stroke:var(--map-structure-default)")
    .replace(/stroke:rgb\(0,0,0\)/g, "stroke:var(--map-structure-default)")
    .replace(/fill:black/g, "fill:var(--map-structure-default)")
    .replace(/fill:rgb\(0,0,0\)/g, "fill:var(--map-structure-default)")
    .replace(/stroke:rgb\(128,128,128\)/g, "stroke:var(--map-light-default)")
    .replace(/fill:rgb\(128,128,128\)/g, "fill:var(--map-label-default)")
    .replace(/stroke:rgb\(255,0,0\)/g, "stroke:var(--map-alert-default)");
}

// Additional normalized mappings for common hex-encoded black and to scope
// replacements for areas that should use label vs structure colors.
// We keep this separate so the main normalizeSvgMarkup remains compact.
function postNormalizeForNamedGroups(markup: string) {
  let out = markup;

  // Replace explicit hex black stroke/fill globally to structure default
  out = out
    .replace(/stroke:#000000/gi, "stroke:var(--map-structure-default)")
    .replace(/fill:#000000/gi, "fill:var(--map-structure-default)")
    .replace(/stroke:#000/gi, "stroke:var(--map-structure-default)")
    .replace(/fill:#000/gi, "fill:var(--map-structure-default)");

  // For text groups under lighting, prefer the label color (more visible in dark).
  // Also ensure individual <text> tags get an explicit fill and opacity if they don't have one.
  out = out.replace(/(<g[^>]*(?:inkscape:label=\"text\"|id=\"lightsText[^\"]*\")[^>]*>[\s\S]*?<\/g>)/gi, (m: string) => {
    let updated = m.replace(/fill:\s*#[0-9a-fA-F]{3,6}/gi, 'fill:var(--map-label-default)').replace(/fill:\s*black/gi, 'fill:var(--map-label-default)');
    updated = updated.replace(/<text\b([^>]*)>/gi, (tFull: string, tAttrs: string) => {
      const attrs = tAttrs || "";
      if (/fill=\"[^\"]*\"/i.test(attrs)) {
        return `<text${attrs.replace(/fill=\"[^\"]*\"/i, 'fill="var(--map-label-default)"')}>`;
      }
      if (/style=\"[^\"]*\"/i.test(attrs)) {
        return `<text${attrs.replace(/style=\"([^\"]*)\"/i, (m2: string, s: string) => `style=\"${s};fill:var(--map-label-default);opacity:var(--map-light-alpha)\"`)}>`;
      }
      return `<text${attrs} style=\"fill:var(--map-label-default);opacity:var(--map-light-alpha)\">`;
    });
    return updated;
  });

  // Ensure any <text> inside lighting groups uses the label color (covers numbering)
  out = out.replace(/(<g[^>]*inkscape:label=\"lighting\"[^>]*>)([\s\S]*?)(<\/g>)/gi, (m: string, open: string, inner: string, close: string) => {
    const newInner = inner.replace(/<text\b([^>]*)>/gi, (tFull: string, tAttrs: string) => {
      const attrs = tAttrs || "";
      // If text already has a fill declaration in style or attribute, replace it
      if (/fill=\"[^\"]*\"/i.test(attrs)) {
        return `<text${attrs.replace(/fill=\"[^\"]*\"/i, 'fill="var(--map-label-default)"')}>`;
      }
      if (/style=\"[^\"]*\"/i.test(attrs)) {
        return `<text${attrs.replace(/style=\"([^\"]*)\"/i, (m2: string, s: string) => `style=\"${s};fill:var(--map-label-default);opacity:var(--map-light-alpha)\"`)}>`;
      }
      return `<text${attrs} style=\"fill:var(--map-label-default);opacity:var(--map-light-alpha)\">`;
    });
    return open + newInner + close;
  });

  // Outer walls and inner layout should use the structure color
  out = out.replace(/(<g[^>]*(?:id=\"outer_walls\"|inkscape:label=\"outer_walls\")[^>]*>[\s\S]*?<\/g>)/gi, (m: string) => {
    return m.replace(/stroke:\s*#[0-9a-fA-F]{3,6}/gi, 'stroke:var(--map-structure-default)').replace(/fill:\s*#[0-9a-fA-F]{3,6}/gi, 'fill:var(--map-structure-default)');
  });

  out = out.replace(/(<g[^>]*(?:id=\"inner_layout\"|inkscape:label=\"inner_layout\")[^>]*>[\s\S]*?<\/g>)/gi, (m: string) => {
    return m.replace(/stroke:\s*#[0-9a-fA-F]{3,6}/gi, 'stroke:var(--map-structure-default)').replace(/fill:\s*#[0-9a-fA-F]{3,6}/gi, 'fill:var(--map-structure-default)');
  });

  return out;
}




export default function InteractiveMap() {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);


  const [svgMarkup, setSvgMarkup] = useState<string>("");
  const [lightsOn, setLightsOn] = useState(false);
  const [lightsVisible, setLightsVisible] = useState(true);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const [transform, setTransform] = useState({ scale: 4.5, x: 300, y: 0 });

  useEffect(() => {
    let cancelled = false;

    fetch(SVG_URL)
      .then((response) => response.text())
      .then((markup) => {
        if (cancelled) return;

        // Normalize common colors -> css vars, then apply group-scoped fixes
        let normalized = normalizeSvgMarkup(markup);
        normalized = postNormalizeForNamedGroups(normalized);

        // Replace stroke declarations on light rects so they use CSS variables
        // and include stroke-opacity so visibility can be toggled via CSS var.
        normalized = normalized.replace(/<rect\b([^>]*)>/gi, (full: string, attrs: string) => {
          const attrText = attrs || "";
          if (!/\bid=\"light|inkscape:label=\"light/i.test(attrText)) {
            return full; // not a light rect
          }

          const selfClose = /\/\s*>\s*$/.test(full);

          if (/style=\"[^\"]*\"/i.test(attrText)) {
            const newAttrs = attrText.replace(/style=\"([^\"]*)\"/i, (m2: string, styleStr: string) => {
              let updated = styleStr;
              if (/stroke\s*:/i.test(updated)) {
                updated = updated.replace(/stroke\s*:[^;\"]*/i, 'stroke:var(--map-light-state)');
              } else {
                updated = `${updated};stroke:var(--map-light-state)`;
              }

              if (/stroke-opacity\s*:/i.test(updated)) {
                updated = updated.replace(/stroke-opacity\s*:[^;\"]*/i, 'stroke-opacity:var(--map-light-alpha)');
              } else {
                updated = `${updated};stroke-opacity:var(--map-light-alpha)`;
              }

              return `style=\"${updated}\"`;
            });
            return `<rect${newAttrs}${selfClose ? ' />' : '>'}`;
          }

          // No style attr — add one with stroke + opacity vars
          return `<rect${attrText} style=\"stroke:var(--map-light-state);stroke-opacity:var(--map-light-alpha)\"${selfClose ? ' />' : '>'}`;
        });

        setSvgMarkup(normalized);
      })
      .catch(() => {
        if (!cancelled) {
          setSvgMarkup("");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Handle Space key for pan mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setSpaceHeld(true);
        
        e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setSpaceHeld(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);



  const viewerStyle = useMemo<CSSVars>(() => {
  const darkTheme = resolvedTheme === "dark";

    return {
      "--map-structure-default": darkTheme ? "#d4d4d8" : "#27272a",
      "--map-light-default": darkTheme ? "#9ca3af" : "#52525b",
      "--map-label-default": darkTheme ? "#e4e4e7" : "#71717a",
      "--map-alert-default": "#f59e0b",
      "--map-light-state": lightsOn ? "#facc15" : "#808080",
      "--map-light-alpha": lightsVisible ? "1" : "0",
    };
  }, [resolvedTheme, lightsOn, lightsVisible]);


 



  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const zoomFactor = Math.exp(-event.deltaY * 0.0012);
    const nextScale = Math.min(30, Math.max(0.25, transform.scale * zoomFactor));
    const worldX = (pointerX - transform.x) / transform.scale;
    const worldY = (pointerY - transform.y) / transform.scale;

    setTransform({
      scale: nextScale,
      x: pointerX - worldX * nextScale,
      y: pointerY - worldY * nextScale,
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (spaceHeld) {
      setIsMouseDown(true);
      setLastMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (spaceHeld && isMouseDown) {
      const deltaX = event.clientX - lastMousePos.x;
      const deltaY = event.clientY - lastMousePos.y;

      setTransform((prev) => ({
        ...prev,
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setLastMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  const handlePointerUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-4 border-b border-border-primary bg-bg-secondary flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={lightsVisible}
            onChange={(e) => setLightsVisible(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm text-text-primary">Show lights</span>
        </label>

        <button
          onClick={() => setLightsOn(!lightsOn)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            lightsOn 
              ? "bg-accent-success text-white" 
              : "bg-interactive-bg text-text-primary hover:bg-interactive-bg-hover"
          }`}
        >
          Lights: {lightsOn ? "ON" : "OFF"}
        </button>
      </div>

      <section
        className="flex-1 relative overflow-hidden"
 
      >
        <div
          ref={containerRef}
          className={`relative h-full w-full overflow-hidden`}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={viewerStyle}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            }}
          >
            {svgMarkup ? (
              <div
                className="select-none"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
              />
            ) : (
              <div className="grid h-full place-items-center p-8 text-center text-sm text-text-muted">
                Loading map...
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}