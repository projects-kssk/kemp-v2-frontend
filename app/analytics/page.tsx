export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-2">Track your performance metrics and insights.</p>
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-themed rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
          <div className="h-64 flex items-center justify-center bg-bg-secondary rounded-lg">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="mt-2 text-text-muted">Chart placeholder</p>
            </div>
          </div>
        </div>

        <div className="card-themed rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
          <div className="h-64 flex items-center justify-center bg-bg-secondary rounded-lg">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <p className="mt-2 text-text-muted">Chart placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Table */}
      <div className="card-themed rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border-primary">
          <h2 className="text-xl font-semibold">Detailed Metrics</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Metric
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                This Week
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Last Week
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            <MetricRow
              metric="Page Views"
              thisWeek="45,231"
              lastWeek="42,100"
              change="+7.4%"
              positive
            />
            <MetricRow
              metric="Unique Visitors"
              thisWeek="12,543"
              lastWeek="11,890"
              change="+5.5%"
              positive
            />
            <MetricRow
              metric="Bounce Rate"
              thisWeek="32.4%"
              lastWeek="35.1%"
              change="-2.7%"
              positive
            />
            <MetricRow
              metric="Avg. Session"
              thisWeek="4m 32s"
              lastWeek="4m 45s"
              change="-4.6%"
              positive={false}
            />
            <MetricRow
              metric="Conversions"
              thisWeek="342"
              lastWeek="298"
              change="+14.8%"
              positive
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface MetricRowProps {
  metric: string;
  thisWeek: string;
  lastWeek: string;
  change: string;
  positive: boolean;
}

function MetricRow({
  metric,
  thisWeek,
  lastWeek,
  change,
  positive,
}: MetricRowProps) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap font-medium">{metric}</td>
      <td className="px-6 py-4">{thisWeek}</td>
      <td className="px-6 py-4">{lastWeek}</td>
      <td className="px-6 py-4">
        <span
          className={positive ? "text-accent-success" : "text-accent-danger"}
        >
          {change}
        </span>
      </td>
    </tr>
  );
}
