"use client";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";

export default function LightingPage() {
  const [areasToggle, setAreasToggle] = useState(true);
  const [devicesToggle, setDevicesToggle] = useState(true);
  const [groupsToggle, setGroupsToggle] = useState(true);
  const [scenesToggle, setScenesToggle] = useState(true);

  return (
    <div className="grid-cols-2 grid-rows-2 gap-6 md:grid lg:grid-cols-3 lg:grid-rows-1">
      <div className="relative card-themed p-4 space-y-2">
        <h1 className="text-2xl font-bold mb-4">Areas</h1>

        <ToggleButton
          checked={areasToggle}
          onChange={() => setAreasToggle(!areasToggle)}
          className="absolute! top-3 right-3"
        />

        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Hall 1</h3>

          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 27°C, cooling ON, fan LOW
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Hall 2</h3>

          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 27°C, cooling ON, fan LOW
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Hall 3</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 27°C, cooling ON, fan LOW
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Warehouse</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
      </div>

      <div className="relative card-themed p-4 ">
        <h1 className="text-2xl font-bold mb-4">Groups</h1>
        <ToggleButton
          checked={groupsToggle}
          onChange={() => setGroupsToggle(!groupsToggle)}
          className="absolute! top-3 right-3"
        />

        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Warehouse</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">PMB Office</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Warehouse</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 19°C, standby, fan LOW
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Office #1</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Office #2</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Office #3</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
        <div className=" text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Office #4</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">
              Temp 22°C, cooling ON, fan HIGH
            </p>
            <div
              className={`rounded-full w-4 h-4 ${areasToggle ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        </div>
      </div>

      <div className="relative card-themed space-y-2 p-4">
        <h1 className="text-2xl font-bold mb-4">Profiles</h1>

        <div className="card-themed  px-4 py-2 text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Default</h3>
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="card-themed px-4 py-2 text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Holiday</h3>
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="card-themed px-4 py-2 text-text-secondary flex gap-2 justify-between">
          <h3 className="font-medium">Working weekend</h3>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
