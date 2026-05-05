"use client";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";

export default function LightingPage() {
  const [areasToggle, setAreasToggle] = useState(true);
  const [groupsToggle, setGroupsToggle] = useState(true);

  const halls = [
    {
      name: "Hall 1",
      columns: 31,
      rows: 6,
      highlightRows: [2, 4],
      activeColumns: [
        1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28,
        29,
      ],
    },
    {
      name: "Hall 2",
      columns: 31,
      rows: 6,
      highlightRows: [2, 4],
      activeColumns: [
        2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29,
        30,
      ],
    },
    {
      name: "Hall 3",
      columns: 44,
      rows: 6,
      highlightRows: [2, 4],
      activeColumns: [
        1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28,
        29, 31, 32, 34, 35, 37, 38, 40, 41, 43, 44,
      ],
    },
  ];
  const maxColumns = Math.max(...halls.map((hall) => hall.columns));

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                Will turn off at 10:30 PM
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
                Will turn off at 10:30 PM
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
                Will turn off at 10:30 PM
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
                Will turn off at 10:30 PM
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
            <h3 className="font-medium">PMB</h3>

            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">MATENET</h3>

            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">HV-1</h3>

            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">HV-2</h3>
            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">Warehouse</h3>
            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">CNC</h3>
            <div className="flex items-center gap-2">
              <p className="text-xs text-text-muted">
                Will turn off at 10:30 PM
              </p>
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">Security Lights H1</h3>
            <div className="flex items-center gap-2">
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">Security Lights H2</h3>
            <div className="flex items-center gap-2">
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
          <div className=" text-text-secondary flex gap-2 justify-between">
            <h3 className="font-medium">Security Lights H3</h3>
            <div className="flex items-center gap-2">
              <div
                className={`rounded-full w-4 h-4 ${groupsToggle ? "bg-green-500" : "bg-gray-500"}`}
              />
            </div>
          </div>
        </div>

        <div className="relative card-themed space-y-2 p-4">
          <h1 className="text-2xl font-bold mb-4">Profiles</h1>

          <div className="card-themed border-accent-primary! px-4 py-2 text-text-secondary flex gap-2 justify-between">
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

      <div className="relative card-themed p-4 md:p-6 space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Lighting Matrix</h2>
            <p className="text-sm text-text-muted">
              Floor map of aisle lighting strips only.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="card-themed p-3 md:p-4 space-y-3">
            <div className="overflow-x-auto pb-1">
              <div
                className="space-y-3"
                style={{ minWidth: `${maxColumns * 18 + 34}px` }}
              >
                <div
                  className="grid items-center gap-1 text-[10px] text-text-muted"
                  style={{
                    gridTemplateColumns: `24px repeat(${maxColumns}, minmax(12px, 1fr))`,
                  }}
                >
                  <span />
                  {Array.from({ length: maxColumns }, (_, index) => (
                    <span
                      key={`global-col-${index + 1}`}
                      className="text-center"
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>

                {halls.map((hall, hallIndex) => (
                  <div
                    key={hall.name}
                    className={`space-y-1.5 ${hallIndex > 0 ? "pt-3 border-t border-border-primary" : ""}`}
                  >
                    <p className="text-xs font-semibold text-text-secondary">
                      {hall.name}
                    </p>

                    {Array.from({ length: hall.rows }, (_, rowIndex) => {
                      const row = rowIndex + 1;

                      return (
                        <div
                          key={`${hall.name}-row-${row}`}
                          className="grid items-center gap-1"
                          style={{
                            gridTemplateColumns: `24px repeat(${maxColumns}, minmax(12px, 1fr))`,
                          }}
                        >
                          <span className="text-[10px] text-text-muted text-center">
                            {row}
                          </span>

                          {Array.from({ length: maxColumns }, (_, colIndex) => {
                            const column = colIndex + 1;

                            if (column > hall.columns) {
                              return (
                                <span
                                  key={`${hall.name}-row-${row}-col-${column}`}
                                  className="h-2.5 rounded-xs border border-transparent"
                                />
                              );
                            }

                            return (
                              <span
                                key={`${hall.name}-row-${row}-col-${column}`}
                                className="h-2.5 rounded-xs border"
                                style={{
                                  backgroundColor:
                                    "var(--color-accent-warning)",
                                  borderColor: "var(--color-accent-warning)",
                                }}
                                title={`${hall.name} | Row ${row} | Column ${column}`}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
