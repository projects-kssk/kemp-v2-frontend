"use client";

import { useState } from "react";
import { PiTimer } from "react-icons/pi";
import { BiSolidWrench } from "react-icons/bi";
import Link from "next/link";


export default function LightSettings() {
  const [intensity, setIntensity] = useState(79);

  return (
    <div className="relative card-themed p-3 flex flex-col gap-3 rounded-xl lg:col-start-2 lg:row-start-1">
      <h2 className="text-xl font-semibold">Lights</h2>
      <Link
        href="/lighting"
        title="Manual Configuration"
        className="right-3 top-3 absolute hover:scale-115"
        aria-label="Go to lighting settings"
      >
        <BiSolidWrench className="w-6 h-6 text-text-secondary" />
      </Link>
      <div className="space-y-3">
        <div className="relative">
          <h2 className="text-2xl font-semibold text-text-secondary w-full text-right">
            {intensity}%
          </h2>

          <input
            type="range"
            min={0}
            max={100}
            value={intensity}
            onChange={(event) => setIntensity(Number(event.target.value))}
            style={{
              background: `linear-gradient(to right, rgb(255, 255, 0) 0%, rgb(255, 255, 255) ${intensity}%, var(--color-bg-primary) ${intensity}%, var(--color-bg-primary) 100%)`,
            }}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-text-tertiary px-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-6">
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-lg font-semibold inline-flex items-center gap-1">
            <PiTimer className="w-6 h-6 text-text-secondary" /> Schedule
          </h3>
          <span className="text-xs font-semibold text-text-muted">
            Default Routine
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1 text-sm text-text-secondary">On at</span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              05:00
            </span>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1  text-sm text-text-secondary">
              Off at
            </span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              22:30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
