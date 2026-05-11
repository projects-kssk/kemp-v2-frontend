"use client";

import { FormSwitch } from "@/components/ui/FormSwitch";
import { useState } from "react";
import { PiFan, PiTimer } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";

export default function DashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("hall1");

  return (
    <div className="h-full">
      {/* Activity Section */}
      <div className="h-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[1fr_1fr] gap-3">
        {/* Overview */}
        <div className="card-themed p-4 col-span-3 h-full flex flex-col justify-center">
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
        <div className="card-themed p-4  row-span-2 h-full flex flex-col">
          <h2 className="text-2xl  mb-4">Weather</h2>
          <div className="flex items-center gap-6">
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
          <h3 className="text-lg my-4">Forecast</h3>
          <div className="flex items-center gap-2">
            <div className="card-themed rounded-lg p-4 flex-1">
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
            <div className="card-themed rounded-lg p-4 flex-1">
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
            <div className="card-themed rounded-lg p-4 flex-1">
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
            <div className="card-themed rounded-lg p-4 flex-1">
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
            <div className="card-themed rounded-lg p-4 flex-1">
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
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 col-span-3 h-full auto-rows-[minmax(170px,1fr)]">
          <div className="card-themed p-4 flex items-center gap-4 lg:col-start-1 lg:row-start-1" />

          <LightSettings />

          <ACControl />

          <div className="card-themed p-4 grid grid-cols-1 gap-4 lg:col-start-4 lg:row-start-1 lg:row-span-2">
            <QuickActionButton icon="🎛️" label="Profiles" />
            <QuickActionButton icon="+" label="New Profile" />
            <QuickActionButton icon="📊" label="Statistics" />
            <QuickActionButton icon="⚙️" label="Configure" />
          </div>

          <div className="card-themed p-4 flex items-center gap-4 lg:col-start-1 lg:row-start-2" />
          <div className="card-themed p-4 flex items-center gap-4 lg:col-start-2 lg:row-start-2" />
        </div>
      </div>
    </div>
  );
}

// Activity Item Component
interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-border-primary last:border-0 last:pb-0">
      <div className="w-2 h-2 mt-2 rounded-full bg-accent-primary" />
      <div className="flex-1 min-w-0">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-text-tertiary truncate">{description}</p>
        <p className="text-xs text-text-muted mt-1">{time}</p>
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
    <button className="flex flex-col items-center justify-center p-4 rounded-lg btn-secondary ">
      <span className="text-2xl mb-2">{icon}</span>
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
    <div className="card-themed p-3 flex flex-col items-center gap-4 row-span-2 w-full">
      <h2 className="self-start text-xl font-bold">AC Control</h2>
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-56 h-56">
          <svg viewBox="0 0 120 120" className="w-56 h-56">
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
              strokeWidth="4"
              stroke="currentColor"
              className="text-accent-primary"
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
              <MdOutlineLightMode  className="w-6 h-6 mb-1" />
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
    <div className="card-themed p-3 flex flex-col gap-5 rounded-xl lg:col-start-2 lg:row-start-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Lights</h2>
        </div>
        <span className="text-lg text-text-secondary">{intensity}%</span>
      </div>

      <div className="space-y-3">
        <div className="relative pt-1">
          <input
            type="range"
            min={0}
            max={100}
            value={intensity}
            onChange={(event) => setIntensity(Number(event.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-yellow-300 bg-border-primary"
          />
          <div className="mt-3 flex justify-between text-xs text-text-tertiary px-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <PiTimer className="w-5 h-5 text-text-secondary" />
          <h3 className="text-lg font-semibold">Schedule</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1 text-sm text-text-secondary">On at</span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              05:00
            </span>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1  text-sm text-text-secondary">Off at</span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              22:30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
