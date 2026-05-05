import { ModulesTable } from "@/components/modules/ModulesTable";

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Modules</h1>
          <p className="mt-2 text-text-secondary">
            Device module status, sensor values, relays, and last received data.
          </p>
        </div>
      </div>

      <ModulesTable />
    </div>
  );
}
