"use client";

import { FormSwitch } from "@/components/ui/FormSwitch";
import { useState } from "react";
import { useTheme } from "@/lib/theme-context";

const sectionMap: Record<string, string | null> = {
  hall1: "/areas/kemp_hall_1.svg",
  hall2: "/areas/kemp_hall_2.svg",
  hall3: "/areas/kemp_hall_3.svg",
  pmb: "/areas/kemp_pmb.svg",
  warehouse: null,
  frontoffice: null,
  rearoffice: null,
};

export default function SectionOverview() {
  const [selectedMenu, setSelectedMenu] = useState("hall1");
  const selectedMap = sectionMap[selectedMenu] ?? null;
  const { resolvedTheme } = useTheme();
  const imgFilterClass = resolvedTheme === "dark" ? "filter invert contrast-80" : "";

  return (
    <div className="card-themed bg-bg-primary! col-span-3 flex h-full flex-col p-3">
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="bg-accent-success h-4 w-4 rounded-full mt-0.5" />
          <h2 className="text-xl font-semibold">Live Overview</h2>
        </div>
        <FormSwitch
          items={[
            { key: "hall1", label: "Hall 1" },
            { key: "hall2", label: "Hall 2" },
            { key: "hall3", label: "Hall 3" },
            { key: "pmb", label: "PMB" },
            { key: "warehouse", label: "Warehouse" },
            { key: "frontoffice", label: "Front Office" },
            { key: "rearoffice", label: "Rear Office" },
          ]}
          activeKey={selectedMenu}
          onChange={(key) => {
            setSelectedMenu(key);
          }}
        />
      </div>


        {selectedMap ? (
          <img
            src={selectedMap}
            alt="Section map"
            className={`max-h-96 w-full object-contain ${imgFilterClass}`}
          />
        ) : null}
    </div>
  );
}
