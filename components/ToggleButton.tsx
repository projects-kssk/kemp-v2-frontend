import React from "react";

type ToggleButtonProps = {
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  className?: string;
};

const SIZES = {
  sm: { w: 36, h: 20, knob: 14 },
  md: { w: 44, h: 24, knob: 18 },
  lg: { w: 56, h: 32, knob: 26 },
};

export default function ToggleButton({
  checked,
  onChange,
  disabled = false,
  size = "md",
  ariaLabel = "Toggle",
  className = "",
}: ToggleButtonProps) {
  const s = SIZES[size] || SIZES.md;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (disabled) return;
    onChange(!checked);
  };

  const containerStyle: React.CSSProperties = {
    width: s.w,
    height: s.h,
    borderRadius: s.h / 2,
    background: disabled
      ? "var(--color-bg-primary)"
      : checked
        ? "var(--color-accent-success)"
        : "var(--color-bg-tertiary)",
    position: "relative",
    transition: "background 150ms",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-block",
  };

  const knobStyle: React.CSSProperties = {
    width: s.knob,
    height: s.knob,
    borderRadius: "50%",
    background: "var(--color-bg-inverted)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    position: "absolute",
    top: (s.h - s.knob) / 2,
    left: checked ? s.w - s.knob - (s.h - s.knob) / 2 : (s.h - s.knob) / 2,
    transition: "left 150ms",
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleClick}
      className={className}
      style={containerStyle}
    >
      <span style={knobStyle} />
    </button>
  );
}
