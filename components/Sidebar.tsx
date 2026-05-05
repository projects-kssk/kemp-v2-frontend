"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "@/lib/sidebar-context";
import { authClient } from "@/lib/auth-client";
import {
  DashboardIcon,
  AnalyticsIcon,
  DocumentIcon,
  SettingsIcon,
  CollapseIcon,
  SignOutIcon,
} from "@/components/icons";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  action?: "sign-out";
}

const mainNavItems: NavItem[] = [
  // { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { name: "Devices", href: "/devices", icon: <AnalyticsIcon /> },
  { name: "Map", href: "/map", icon: <DocumentIcon /> },
  { name: "Modules", href: "/modules", icon: <AnalyticsIcon /> },
];

const bottomNavItems: NavItem[] = [
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
  { name: "Sign Out", href: "/login", icon: <SignOutIcon />, action: "sign-out" },
];

interface SidebarItemProps {
  item: NavItem;
  isCollapsed: boolean;
  isActive: boolean;
  onClick?: () => void;
}

function SidebarItem({
  item,
  isCollapsed,
  isActive,
  onClick,
}: SidebarItemProps) {
  if (item.action === "sign-out") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
          min-h-[2.75rem]
          ${isCollapsed ? "justify-center" : ""}
          text-text-secondary hover:bg-sidebar-item-hover hover:text-text-primary
        `}
        title={isCollapsed ? item.name : undefined}
      >
        <span className="shrink-0">{item.icon}</span>
        {!isCollapsed && <span className="truncate">{item.name}</span>}
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        min-h-[2.75rem]
        ${isCollapsed ? "justify-center" : ""}
        ${
          isActive
            ? "bg-sidebar-item-active text-sidebar-item-active-text font-medium"
            : "text-text-secondary hover:bg-sidebar-item-hover hover:text-text-primary"
        }
      `}
      title={isCollapsed ? item.name : undefined}
    >
      <span className="shrink-0">{item.icon}</span>
      {!isCollapsed && <span className="truncate">{item.name}</span>}
    </Link>
  );
}

export function Sidebar({ hasNavbar = true }: { hasNavbar?: boolean }) {
  const { isCollapsed, isMobileOpen, toggleCollapse, closeMobile } =
    useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    closeMobile();
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 z-40 flex flex-col
          bg-sidebar-bg border-r border-sidebar-border
          transition-all duration-300 ease-in-out
          ${hasNavbar ? "top-16 bottom-0" : "top-0 bottom-0"}
          ${isCollapsed ? "w-16" : "w-64"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {/* Collapse toggle - desktop only */}
          <button
            onClick={toggleCollapse}
            className={`
              hidden lg:flex items-center gap-3 w-full px-2 py-2.5 rounded-lg
              min-h-11
              text-text-secondary hover:bg-sidebar-item-hover 
              hover:text-text-primary transition-all duration-200
              ${isCollapsed ? "justify-center" : ""}
            `}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <CollapseIcon isCollapsed={isCollapsed} />
            {!isCollapsed && <span>Collapse</span>}
          </button>

          {mainNavItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
              isActive={pathname === item.href}
              onClick={closeMobile}
            />
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
          {bottomNavItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
              isActive={pathname === item.href}
              onClick={item.action === "sign-out" ? handleSignOut : closeMobile}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
