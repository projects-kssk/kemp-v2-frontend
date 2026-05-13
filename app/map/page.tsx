"use client";

import { useTheme } from "@/lib/theme-context";

export default function Map() {

  const selectedMap = "/areas/kempmap.svg";
  const { resolvedTheme } = useTheme();
  const imgFilterClass =
    resolvedTheme === "dark" ? "filter invert contrast-80" : "";

  return (
    <div className="space-y-6">
      <img
        src={selectedMap}
        alt="Section map"
        className={`max-h-253 w-full object-contain ${imgFilterClass}`}
      />
    </div>
  );
}
