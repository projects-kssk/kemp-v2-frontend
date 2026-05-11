"use client";

import { useEffect, useRef, useState } from "react";

interface FormSwitchItem {
  key: string;
  label: string;
  meta?: string;
}

interface FormSwitchProps {
  items?: FormSwitchItem[];
  activeKey?: string | null;
  onChange?: (key: string) => void;
  orientation?: "horizontal" | "vertical";
}

export const FormSwitch = ({
  items = [],
  activeKey = null,
  onChange = () => {},
  orientation = "horizontal",
}: FormSwitchProps) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [slideStyle, setSlideStyle] = useState({
    size: 0,
    offset: 0,
  });

  useEffect(() => {
    const activeIndex = items.findIndex((item) => item.key === activeKey);
    if (activeIndex === -1) {
      return;
    }

    const activeButton = buttonRefs.current[activeIndex];
    if (!activeButton) {
      return;
    }

    const isVertical = orientation === "vertical";
    const size = isVertical
      ? activeButton.offsetHeight
      : activeButton.offsetWidth;
    const offset = isVertical
      ? activeButton.offsetTop
      : activeButton.offsetLeft;

    setSlideStyle((prev) => {
      if (prev.size === size && prev.offset === offset) {
        return prev;
      }

      return { size, offset };
    });
  }, [activeKey, items, orientation]);

  const isVertical = orientation === "vertical";

  return (
    <div
      className={`relative bg-bg-tertiary p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] ${
        isVertical
          ? "flex w-full flex-col gap-1 rounded-2xl"
          : "inline-flex items-center gap-1 rounded-full"
      }`}
    >
      <div
        className={`absolute bg-bg-primary shadow-md transition-all duration-300 ease-in-out ${
          isVertical ? "rounded-xl" : "rounded-full"
        }`}
        style={{
          width: isVertical ? "calc(100% - 8px)" : slideStyle.size,
          height: isVertical ? slideStyle.size : "calc(100% - 8px)",
          top: isVertical ? slideStyle.offset : "4px",
          left: isVertical ? "4px" : slideStyle.offset,
        }}
      />

      {items.map((item, idx) => (
        <button
          key={item.key}
          ref={(element) => {
            buttonRefs.current[idx] = element;
          }}
          type="button"
          onClick={() => onChange(item.key)}
          aria-label={item.label}
          className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:text-sm ${
            activeKey === item.key
              ? "text-text-primary"
              : "text-text-secondary hover:text-text-primary"
          } ${isVertical ? "w-full text-left" : ""}`}
        >
          <span className="inline-flex items-center gap-2">
            <span className="whitespace-nowrap">{item.label}</span>
            {item.meta ? (
              <span
                aria-hidden="true"
                className={`text-[11px] font-semibold ${
                  activeKey === item.key
                    ? "text-text-muted"
                    : "text-text-muted"
                }`}
              >
                {item.meta}
              </span>
            ) : null}
          </span>
        </button>
      ))}
    </div>
  );
};
