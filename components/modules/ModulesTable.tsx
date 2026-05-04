"use client";

import { Table, type TableHeader } from "all-purpose-table";

type ModuleStatus = "Online" | "Offline";

type ModuleRow = {
  id: string;
  deviceName: string;
  status: ModuleStatus;
  temperature: string;
  humidity: string;
  light: string;
  relay1: string;
  relay2: string;
  relay3: string;
  relay4: string;
  thermostat: string;
  lastPing: string;
  lastData: string;
  action: string;
};

const emptyValue = "---";

const moduleRows: ModuleRow[] = [
  {
    id: "Device-0",
    deviceName: "OUTSIDE",
    status: "Online",
    temperature: "31.4 °C",
    humidity: "27 %",
    light: "55 lx",
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: "22.00",
    lastPing: "26s",
    lastData: "26s",
    action: "Get Data",
  },
  {
    id: "Device-1",
    deviceName: "OFFICE_66",
    status: "Online",
    temperature: "23.5 °C",
    humidity: "32 %",
    light: "102 lx",
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: "23.00",
    lastPing: "2m,9s",
    lastData: "3m",
    action: "Get Data",
  },
  {
    id: "Device-2",
    deviceName: "PWR1_ROOF_WINDOWS",
    status: "Online",
    temperature: "30.0 °C",
    humidity: "25 %",
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: "27s",
    lastData: "27s",
    action: "Get Data",
  },
  {
    id: "Device-5",
    deviceName: "RECEPTION",
    status: "Online",
    temperature: "23.2 °C",
    humidity: "39 %",
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: "4m,38s",
    lastData: "8m,6s",
    action: "Get Data",
  },
  {
    id: "Device-8",
    deviceName: "HALL3_AIRCON_1",
    status: "Offline",
    temperature: "26 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,1h,28m,55s",
    action: "Get Data",
  },
  {
    id: "Device-9",
    deviceName: "HALL3_AIRCON_2",
    status: "Offline",
    temperature: "26.6 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,4d,1h,33m,25s",
    action: "Get Data",
  },
  {
    id: "Device-10",
    deviceName: "HALL3_AIRCON_3",
    status: "Offline",
    temperature: "26.5 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,4d,1h,33m,26s",
    action: "Get Data",
  },
  {
    id: "Device-11",
    deviceName: "HALL3_AIRCON_4",
    status: "Offline",
    temperature: emptyValue,
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,4d,1h,33m,27s",
    action: "Get Data",
  },
  {
    id: "Device-12",
    deviceName: "HALL3_AIRCON_5",
    status: "Offline",
    temperature: "25.4 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,1h,28m,54s",
    action: "Get Data",
  },
  {
    id: "Device-13",
    deviceName: "HALL3_AIRCON_6",
    status: "Offline",
    temperature: emptyValue,
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,3d,20m,41s",
    action: "Get Data",
  },
  {
    id: "Device-14",
    deviceName: "HALL3_AIRCON_7",
    status: "Offline",
    temperature: "26.5 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,4d,1h,50m,46s",
    action: "Get Data",
  },
  {
    id: "Device-15",
    deviceName: "HALL3_AIRCON_8",
    status: "Offline",
    temperature: "26.4 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,4d,1h,40m,49s",
    action: "Get Data",
  },
  {
    id: "Device-17",
    deviceName: "HALL3_AIRCON_10",
    status: "Offline",
    temperature: "24.9 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,1h,28m,51s",
    action: "Get Data",
  },
  {
    id: "Device-19",
    deviceName: "HALL3_AIRCON_13",
    status: "Offline",
    temperature: "25.1 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,1w,1h,6m,32s",
    action: "Get Data",
  },
  {
    id: "Device-20",
    deviceName: "HALL3_AIRCON_12",
    status: "Offline",
    temperature: "23.75 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "1y,1M,2w,2d,19h,41m,45s",
    action: "Get Data",
  },
  {
    id: "Device-21",
    deviceName: "HALL3_AIRCON_14",
    status: "Offline",
    temperature: "25.9 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,3d,52m,51s",
    action: "Get Data",
  },
  {
    id: "Device-22",
    deviceName: "HALL3_AIRCON_15",
    status: "Offline",
    temperature: "11.8 °C",
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "9M,3d,1h,10m,15s",
    action: "Get Data",
  },
  {
    id: "Device-23",
    deviceName: "HALL3_AIRCON_16",
    status: "Offline",
    temperature: emptyValue,
    humidity: emptyValue,
    light: emptyValue,
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: emptyValue,
    lastPing: emptyValue,
    lastData: "1y,7M,1w,5d,17m,45s",
    action: "Get Data",
  },
  {
    id: "Device-24",
    deviceName: "OFFICE_71_FINANCE",
    status: "Online",
    temperature: "23.6 °C",
    humidity: "38 %",
    light: "142 lx",
    relay1: emptyValue,
    relay2: emptyValue,
    relay3: emptyValue,
    relay4: emptyValue,
    thermostat: "23.00",
    lastPing: "17s",
    lastData: "17s",
    action: "Get Data",
  },
];

const moduleHeaders: TableHeader[] = [
  { accessor: "id", label: "Device ID", isSortable: true, minWidth: 120 },
  {
    accessor: "deviceName",
    label: "Device Name",
    isSortable: true,
    minWidth: 190,
  },
  {
    accessor: "status",
    label: "Status",
    isSortable: true,
    minWidth: 120,
    cellRenderer: ({ value }) => (
      <span
        className={`font-semibold ${
          value === "Online" ? "text-accent-success" : "text-accent-danger"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    accessor: "temperature",
    label: "Temperature",
    isSortable: true,
    minWidth: 130,
  },
  { accessor: "humidity", label: "Humidity", isSortable: true, minWidth: 120 },
  { accessor: "light", label: "Light", isSortable: true, minWidth: 120 },
  { accessor: "relay1", label: "Relay 1", minWidth: 90 },
  { accessor: "relay2", label: "Relay 2", minWidth: 90 },
  { accessor: "relay3", label: "Relay 3", minWidth: 90 },
  { accessor: "relay4", label: "Relay 4", minWidth: 90 },
  {
    accessor: "thermostat",
    label: "Thermostat",
    isSortable: true,
    minWidth: 120,
  },
  { accessor: "lastPing", label: "Last Ping", isSortable: true, minWidth: 150 },
  { accessor: "lastData", label: "Last Data", isSortable: true, minWidth: 210 },
  {
    accessor: "action",
    label: "Action",
    minWidth: 110,
    cellRenderer: ({ row }) => (
      <button
        type="button"
        onClick={() => {
          console.info(`Get data requested for ${row.id}`);
        }}
        className="rounded-md border border-border-secondary px-2 py-1 text-xs font-semibold text-text-secondary hover:bg-interactive-bg-hover hover:text-text-primary"
      >
        Get Data
      </button>
    ),
  },
];

export function ModulesTable() {
  const onlineCount = moduleRows.filter((row) => row.status === "Online").length;
  const offlineCount = moduleRows.length - onlineCount;

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="rounded-md border border-border-primary bg-themed-secondary px-3 py-1.5 text-text-secondary">
          Online:{" "}
          <strong className="font-semibold text-accent-success">
            {onlineCount}
          </strong>
        </span>
        <span className="rounded-md border border-border-primary bg-themed-secondary px-3 py-1.5 text-text-secondary">
          Offline:{" "}
          <strong className="font-semibold text-accent-danger">
            {offlineCount}
          </strong>
        </span>
        <span className="rounded-md border border-border-primary bg-themed-secondary px-3 py-1.5 text-text-secondary">
          Total:{" "}
          <strong className="font-semibold text-text-primary">
            {moduleRows.length}
          </strong>
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-border-primary bg-themed-secondary p-2">
        <Table
          manualHeaders={moduleHeaders}
          manualRowData={moduleRows}
          height="calc(100vh - 15rem)"
          rowHeight={30}
          rowsPerPage={25}
          rowsPerPageOptions={[25, 50, 100]}
          shouldPaginate
          columnWidthsStorageKey="kemp-modules-table-widths"
        />
      </div>
    </section>
  );
}
