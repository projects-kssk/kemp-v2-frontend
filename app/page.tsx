"use client";

import { FormSwitch } from "@/components/ui/FormSwitch";
import { useState } from "react";
import { PiFan, PiTimer } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { FaCloudRain } from "react-icons/fa";
import { BiSolidWrench } from "react-icons/bi";
import Link from "next/link";

export default function DashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("hall1");

  return (
    <div className="h-full">
      {/* Activity Section */}
      <div className="h-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[1fr_1fr] gap-3">
        {/* Overview */}
        <div className="card-themed bg-bg-primary! p-4 col-span-3 h-full flex flex-col justify-center">
          <div className="h-full flex flex-row justify-between items-start h-8">
            <div className="flex items-center gap-2">
              <div className="bg-accent-success h-4 w-4 rounded-full mt-0.5" />
              <h2 className="text-xl font-semibold ">Live Overview</h2>
            </div>
            <FormSwitch
              items={[
                { key: "hall1", label: "Hall 1" },
                { key: "hall2", label: "Hall 2" },
                { key: "hall3", label: "Hall 3" },
                { key: "warehouse", label: "Warehouse" },
                { key: "pmb", label: "PMB" },
                { key: "frontoffice", label: "Front Office" },
                { key: "rearoffice", label: "Rear Office" },
              ]}
              activeKey={selectedMenu}
              onChange={(key) => {
                setSelectedMenu(key);
              }}
            />
          </div>

          <p className="text-text-secondary self-center h-full">
            Loading map...
          </p>
        </div>

        {/* Weather */}
        <div className="relative card-themed p-3  row-span-2 h-full flex flex-col">
          <p className="absolute top-2 right-2 text-text-muted text-xs font-semibold">
            Source: Weather API
          </p>

          <h2 className="text-xl font-semibold">Weather</h2>
          <div className="flex justify-center items-center gap-6 py-8">
            <div className="flex items-center gap-3">
              <svg
                className="w-12 h-12 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold">72°F</p>
                <p className="text-sm text-text-secondary">Sunny</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H7m10 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold">24℃</p>
                <p className="text-sm text-text-secondary">Cloudy</p>
              </div>
            </div>
          </div>
          <h3 className="text-lg my-4 font-semibold">Forecast</h3>
          <div className="flex items-center gap-2 bg-bg-primary/50 rounded-lg divide-x-2 divide-border-primary  py-4">
            <div className="px-4 flex-1">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="text-sm text-text-secondary">Mon</p>
              <p className="text-lg font-medium">20℃</p>
            </div>
            <div className="px-4 flex-1">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H7m10 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sm text-text-secondary">Tue</p>
              <p className="text-lg font-medium">22℃</p>
            </div>
            <div className="px-4 flex-1">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H7m10 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sm text-text-secondary">Wed</p>
              <p className="text-lg font-medium">24℃</p>
            </div>
            <div className="px-4 flex-1">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H7m10 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sm text-text-secondary">Thu</p>
              <p className="text-lg font-medium">21℃</p>
            </div>
            <div className="px-4 flex-1">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H7m10 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sm text-text-secondary">Fri</p>
              <p className="text-lg font-medium">18℃</p>
            </div>
          </div>

          <h3 className="text-lg mt-4 font-semibold">Sensor Data</h3>
          <div className="flex flex-col justify-start gap-2 divide-border-primary divide-y">
            <div className="flex flex-row justify-start items-center">
              <FaTemperatureQuarter className="w-6 h-6" />
              <div className="p-2 flex-1">
                <p className="text-sm text-text-secondary">Temperature</p>
                <p className="text-lg font-medium">22.5℃</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaDroplet className="w-6 h-6" />
              <div className="p-2 flex-1">
                <p className="text-sm text-text-secondary">Humidity</p>
                <p className="text-lg font-medium">60%</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaWind className="w-6 h-6" />
              <div className="p-2 flex-1">
                <p className="text-sm text-text-secondary">Wind Speed</p>
                <p className="text-lg font-medium">5 km/h</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaCloudRain className="w-6 h-6" />
              <div className="p-2 flex-1">
                <p className="text-sm text-text-secondary">Rain Sensor</p>
                <p className="text-lg font-medium">0 mm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Routines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 col-span-3 h-full">
          <div className="card-themed p-4 flex items-center gap-4 lg:col-start-1 lg:row-start-2" />
          <div className="card-themed p-4 flex items-center gap-4 lg:col-start-2 lg:row-start-2" />
          <WindowSettings />
          <LightSettings />

          <ACControl />

          <div className="card-themed p-3 grid grid-cols-1 gap-3 lg:col-start-4 lg:row-start-1 lg:row-span-2">
            <h2 className="text-xl font-semibold">Routines</h2>
            <h2 className=" font-semibold text-text-tertiary!">
              Current Routine "Default"
            </h2>
            <QuickActionButton icon="🎛️" label="Routines" />
            <QuickActionButton icon="➕" label="Add manual specification" />
            <QuickActionButton icon="📊" label="Routine Diary" />
            <QuickActionButton icon="⚙️" label="Configure Routines" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Quick Action Button Component
interface QuickActionButtonProps {
  icon: string;
  label: string;
}

function QuickActionButton({ icon, label }: QuickActionButtonProps) {
  return (
    <button className="flex gap-2 items-center justify-start rounded-lg btn-secondary ">
      <span className="text-2xl ">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function ACControl() {
  const min = 15;
  const max = 32;
  const [temp, setTemp] = useState<number>(21);

  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(1, (temp - min) / (max - min)));
  const dash = pct * circumference;

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

      <h2 className="self-start text-xl font-semibold">AC Control</h2>
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-58 h-56">
          <svg viewBox="0 0 120 120" className="w-56 h-56">
            <defs>
              <linearGradient
                id="ac-progress-gradient"
                x1="12"
                y1="108"
                x2="108"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r={radius}
              strokeWidth="3"
              className="text-bg-primary"
              stroke="currentColor"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              strokeWidth="5"
              stroke="url(#ac-progress-gradient)"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              transform={`rotate(-260 60 60)`}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-4xl font-bold">{temp}°</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="text-xl">15°</div>
              <button
                onClick={() => setTemp((t) => Math.max(min, t - 1))}
                className="w-12 h-12 rounded-full bg-card bg-opacity-20 flex items-center justify-center text-xl btn-secondary pb-1 rounded-full!"
                aria-label="decrease temp"
              >
                −
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTemp((t) => Math.min(max, t + 1))}
                className="w-12 h-12 rounded-full bg-card bg-opacity-20 flex items-center justify-center text-xl btn-secondary pb-1 rounded-full!"
                aria-label="increase temp"
              >
                +
              </button>
              <div className="text-xl ">32°</div>
            </div>
          </div>

          <div className="flex items-center gap-8 mt-8">
            <button className="flex flex-col items-center text-sm text-text-secondary">
              <PiFan className="w-6 h-6 mb-1" />
              Fans
            </button>
            <button className="flex flex-col items-center text-sm text-text-secondary ">
              <PiTimer className="w-6 h-6 mb-1" />
              Timer
            </button>
            <button className="flex flex-col items-center text-sm text-text-secondary">
              <MdOutlineLightMode className="w-6 h-6 mb-1" />
              Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightSettings() {
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

function WindowSettings() {
  return (
    <div className="card-themed p-3 flex flex-col gap-5 rounded-xl lg:col-start-1 lg:row-start-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Windows</h2>
        </div>
      </div>
    </div>
  );
}
