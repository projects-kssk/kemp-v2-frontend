export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2">
          Welcome to your dashboard. Here&apos;s an overview of your activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,543"
          change="+12.5%"
          changeType="positive"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          change="+8.2%"
          changeType="positive"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Active Projects"
          value="23"
          change="-2.4%"
          changeType="negative"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          }
        />
        <StatCard
          title="Completion Rate"
          value="94.2%"
          change="+4.1%"
          changeType="positive"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card-themed rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              title="New user registered"
              description="john.doe@example.com joined the platform"
              time="2 minutes ago"
            />
            <ActivityItem
              title="Project completed"
              description="Marketing Campaign 2026 was marked as complete"
              time="1 hour ago"
            />
            <ActivityItem
              title="Payment received"
              description="Invoice #1234 was paid ($2,500)"
              time="3 hours ago"
            />
            <ActivityItem
              title="New feature deployed"
              description="Dark mode support is now live"
              time="5 hours ago"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card-themed rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton icon="+" label="New Project" />
            <QuickActionButton icon="📊" label="View Reports" />
            <QuickActionButton icon="👥" label="Invite Team" />
            <QuickActionButton icon="⚙️" label="Settings" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div className="card-themed rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
          {icon}
        </div>
        <span
          className={`text-sm font-medium ${
            changeType === "positive"
              ? "text-accent-success"
              : "text-accent-danger"
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-bold">{value}</h3>
      <p className="text-sm text-text-tertiary">{title}</p>
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
    <button className="flex flex-col items-center justify-center p-4 rounded-lg interactive-themed">
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
