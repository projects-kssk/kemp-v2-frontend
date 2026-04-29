"use client";

import { useTheme } from "@/lib/theme-context";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2">Manage your application preferences.</p>
      </div>

      {/* Appearance Section */}
      <section className="card-themed rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <div className="flex flex-wrap gap-3">
              <ThemeButton
                label="Light"
                value="light"
                currentTheme={theme}
                onSelect={setTheme}
                icon={
                  <svg
                    className="w-5 h-5"
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
                }
              />
              <ThemeButton
                label="Dark"
                value="dark"
                currentTheme={theme}
                onSelect={setTheme}
                icon={
                  <svg
                    className="w-5 h-5"
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
              <ThemeButton
                label="System"
                value="system"
                currentTheme={theme}
                onSelect={setTheme}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>
            <p className="text-sm text-text-muted mt-2">
              Select your preferred theme. System will automatically match your
              device settings.
            </p>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="card-themed rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          <ToggleSetting
            label="Email notifications"
            description="Receive email updates about your account activity"
            defaultChecked
          />
          <ToggleSetting
            label="Push notifications"
            description="Receive push notifications on your device"
            defaultChecked={false}
          />
          <ToggleSetting
            label="Weekly digest"
            description="Get a weekly summary of your activity"
            defaultChecked
          />
        </div>
      </section>

      {/* Account Section */}
      <section className="card-themed rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Display Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-2 rounded-lg border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-2 rounded-lg border"
            />
          </div>
          <div className="pt-4">
            <button className="px-4 py-2 rounded-lg bg-accent-success text-white hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="card-themed rounded-xl p-6 border-accent-danger/50">
        <h2 className="text-xl font-semibold mb-4 text-accent-danger">
          Danger Zone
        </h2>
        <p className="mb-4">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <button className="px-4 py-2 rounded-lg bg-accent-danger text-white hover:opacity-90 transition-opacity">
          Delete Account
        </button>
      </section>
    </div>
  );
}

interface ThemeButtonProps {
  label: string;
  value: "light" | "dark" | "system";
  currentTheme: string;
  onSelect: (theme: "light" | "dark" | "system") => void;
  icon: React.ReactNode;
}

function ThemeButton({
  label,
  value,
  currentTheme,
  onSelect,
  icon,
}: ThemeButtonProps) {
  const isSelected = currentTheme === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
        isSelected
          ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
          : "border-border-primary hover:border-border-secondary"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

interface ToggleSettingProps {
  label: string;
  description: string;
  defaultChecked?: boolean;
}

function ToggleSetting({
  label,
  description,
  defaultChecked = false,
}: ToggleSettingProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-interactive-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div>
      </label>
    </div>
  );
}
