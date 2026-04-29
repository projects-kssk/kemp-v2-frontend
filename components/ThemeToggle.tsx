"use client";

import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-interactive-bg w-9 h-9"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-interactive-bg text-text-primary transition-colors"
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
