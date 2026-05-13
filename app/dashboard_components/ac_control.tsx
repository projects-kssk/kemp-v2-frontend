"use client";

import { useState } from "react";
import { PiFan, PiTimer } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { BiSolidWrench } from "react-icons/bi";
import { LuPlus, LuMinus } from "react-icons/lu";
import Link from "next/link";

export default function ACControl() {
  const min = 15;
  const max = 32;
  const [temp, setTemp] = useState<number>(21);
  const r = 52; // same radius as the <circle>
  const circumference = 2 * Math.PI * r;
  const ratio = (temp - min) / (max - min);

  // Configure sweep angle (partial arc). Increase to match reference image.
  const sweepFraction = 0.8; // 80% of the circle (~288°)
  const sweepAngleDeg = sweepFraction * 360;
  const totalArc = circumference * sweepFraction; // length of visible arc
  const visibleLength = Math.max(0, Math.min(1, ratio)) * totalArc;

  // Use dash+gap = circumference to avoid wrapping beyond the arc
  const remaining = Math.max(0, circumference - totalArc);
  const bgDash = `${totalArc} ${remaining}`;
  const fgVisible = Math.max(0, Math.min(visibleLength, totalArc));
  const fgGap = Math.max(0, circumference - fgVisible);
  const fgDash = `${fgVisible} ${fgGap}`;
  const rotationDeg = -198 - (360 - sweepAngleDeg) / 2; // rotate so sweep is centered

  return (
    <div className="relative card-themed p-3 flex flex-col items-center gap-4 row-span-2 w-full">
      <Link
        href="/climatization"
        title="Manual Configuration"
        className="right-3 top-3 absolute hover:scale-115"
        aria-label="Go to climatization settings"
      >
        <BiSolidWrench className="w-6 h-6 text-text-secondary" />
      </Link>

      <h2 className="self-start text-xl font-light">AC Control</h2>
      <div className="flex flex-col items-center ">
        <div className="relative w-full h-60 flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="w-56 h-56 absolute">
            <defs>
              <linearGradient
                id="acGradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="60"
                x2="120"
                y2="60"
                gradientTransform={`rotate(${rotationDeg} 60 60)`}
              >
                <stop offset="0%" stopColor="#9be0ff" />
                <stop offset="60%" stopColor="#47a9ff" />
                <stop offset="100%" stopColor="#1e6ef0" />
              </linearGradient>
            </defs>

            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="var(--color-bg-primary)"
              strokeWidth="3"
              strokeDasharray={bgDash}
              style={{
                transform: `rotate(${rotationDeg}deg)`,
                transformOrigin: "center",
                strokeLinecap: "round",
              }}
            />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="url(#acGradient)"
              strokeWidth="5"
              strokeDasharray={fgDash}
              style={{
                transform: `rotate(${rotationDeg}deg)`,
                transformOrigin: "center",
                strokeLinecap: "round",
                transition:
                  "stroke-dasharray 240ms ease, stroke-dashoffset 240ms ease",
              }}
            />
          </svg>

          <p className="pl-4 pb-2 text-6xl font-light">{temp}°</p>
          <p className="absolute bottom-4 left-0 text-xl font-light">15°</p>
          <p className="absolute bottom-4 right-0 text-xl font-light">32°</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTemp((t) => Math.max(min, t - 1))}
                className="w-12 h-12 rounded-full bg-card bg-opacity-20 flex items-center justify-center text-3xl btn-tertiary  rounded-full!"
                aria-label="decrease temp"
              >
                <LuMinus />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTemp((t) => Math.min(max, t + 1))}
                className="w-12 h-12 rounded-full bg-card bg-opacity-20 flex items-center justify-center text-3xl btn-tertiary  rounded-full!"
                aria-label="increase temp"
              >
                <LuPlus />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-8">
            <button className="flex flex-col items-center text-sm text-text-secondary font-light">
              <PiFan className="w-6 h-6 mb-1" />
              Fans
            </button>
            <button className="flex flex-col items-center text-sm text-text-secondary font-light ">
              <PiTimer className="w-6 h-6 mb-1" />
              Timer
            </button>
            <button className="flex flex-col items-center text-sm text-text-secondary font-light">
              <MdOutlineLightMode className="w-6 h-6 mb-1" />
              Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
