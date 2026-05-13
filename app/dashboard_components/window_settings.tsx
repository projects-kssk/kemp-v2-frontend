"use client";

import { useState } from "react";
import { PiTimer } from "react-icons/pi";
import { BiSolidWrench } from "react-icons/bi";
import Link from "next/link";
import { FormSwitch } from "@/components/ui/FormSwitch";

export default function WindowSettings() {

    const [selectedMenu, setSelectedMenu] = useState("hall1");

  return (
    <div className="relative card-themed max-h-61 p-3 flex flex-col gap-2 rounded-xl lg:col-start-1 lg:row-start-1 flex justify-between">
      <div className="flex flex-col items-start justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Windows</h2>

          <Link
            href="/windows"
            title="Manual Configuration"
            className="right-3 top-3 absolute hover:scale-115"
            aria-label="Go to window settings"
          >
            <BiSolidWrench className="w-6 h-6 text-text-secondary" />
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="bg-accent-success h-4 w-4 rounded-full" />

          <p className="text-sm text-text-muted text-center">
            Windows are currently open
          </p>
        </div>
      </div>

      <div className="flex self-center justify-between items-center gap-2 w-full">
        <h2 className="font-semibold">Mode</h2>
        <FormSwitch
          items={[
            { key: "automatic", label: "Automatic" },
            { key: "open", label: "Open" },
            { key: "close", label: "Close" },
          ]}
          activeKey={selectedMenu}
          onChange={(key) => {
            setSelectedMenu(key);
          }}
        />
      </div>
      <div className="space-y-3 ">
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
            <span className="px-4 py-1 text-sm text-text-secondary">Temp</span>
            <span className="flex-1 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              3°C{`<`}80℃
            </span>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1  text-sm text-text-secondary">Rain</span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              0 mm/h
            </span>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1  text-sm text-text-secondary">Wind</span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              5 km/h
            </span>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-border-primary bg-bg-secondary/40">
            <span className="px-4 py-1  text-sm text-text-secondary">
              Humidity
            </span>
            <span className="flex-1 px-4 py-1 text-sm text-center bg-bg-primary/80 font-medium">
              60%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
