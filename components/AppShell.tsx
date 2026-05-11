"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useSidebar } from "@/lib/sidebar-context";

interface AppShellProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showSidebar?: boolean;
}

export function AppShell({
  children,
  showNavbar = false,
  showSidebar = true,
}: AppShellProps) {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const shouldShowNavbar = showNavbar && !isAuthPage;
  const shouldShowSidebar = showSidebar && !isAuthPage;

  // On mobile, if either navbar or sidebar is enabled, show both for better UX
  const showNavbarOnMobile = shouldShowNavbar || shouldShowSidebar;
  const showSidebarOnMobile = shouldShowNavbar || shouldShowSidebar;

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      {/* Top Navbar - show on mobile if either component is enabled, show on desktop based on prop */}
      <div className={showNavbarOnMobile ? "lg:block" : "hidden"}>
        {shouldShowNavbar && <Navbar />}
      </div>
      <div
        className={
          showNavbarOnMobile && !shouldShowNavbar ? "lg:hidden" : "hidden"
        }
      >
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar - show on mobile if either component is enabled, show on desktop based on prop */}
        <div className={showSidebarOnMobile ? "lg:block" : "hidden"}>
          {shouldShowSidebar && <Sidebar hasNavbar={shouldShowNavbar} />}
        </div>
        <div
          className={
            showSidebarOnMobile && !shouldShowSidebar ? "lg:hidden" : "hidden"
          }
        >
          <Sidebar hasNavbar={shouldShowNavbar || shouldShowSidebar} />
        </div>

        {/* Main Content Area */}
        <main
          className={`
            flex-1 min-h-0 transition-all duration-300
            ${showNavbarOnMobile ? "pt-16 lg:pt-0" : "pt-0"}
            ${shouldShowNavbar ? "lg:pt-16" : ""}
            ${showSidebarOnMobile ? "lg:pl-0" : "pl-0"}
            ${shouldShowSidebar ? (isCollapsed ? "lg:pl-16" : "lg:pl-64") : ""}
          `}
        >
          <div className={isAuthPage ? "" : "p-1 sm:p-2 lg:p-3 h-full"}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
