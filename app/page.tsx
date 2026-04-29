import { ShowcaseCard } from "@/components/ShowcaseCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          KEMP
        </h1>
      </section>

      {/* Features Section */}
      <section id="features">
        <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShowcaseCard
            title="Lights Hall 1"
            description="Running weekday schedule, lights will next turn off on Friday at 11:00 PM"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Lights Hall 2"
            description="Running weekday schedule, lights will next turn off on Friday at 11:00 PM"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Lights Hall 3"
            description="Running weekday schedule, lights will next turn off on Friday at 11:00 PM"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />

          <ShowcaseCard
            title="AC Warehouse"
            description="Current outside temperature is 20°C, running on low power mode"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="AC Hall 2"
            description="Current outside temperature is 20°C, running on low power mode"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="AC Hall 3"
            description="Current outside temperature is 20°C, running on low power mode"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            }
          />
        </div>
      </section>

      {/* Controlled Devices & Sensors */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">
          Controlled Devices & Sensors
        </h2>
        <div className="card-themed rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Dark Mode</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-success text-white">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">
                  Temperature sensor in the main hall
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Sidebar</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-success text-white">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">Wind sensor roof #1</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Routing</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-success text-white">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">Humidity sensor in the warehouse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="text-center pt-8">
        <p className="mt-2 text-text-muted">
          © 2026 Next.js Template. Ready for your project.
        </p>
      </footer> */}
    </div>
  );
}
