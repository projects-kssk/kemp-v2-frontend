"use client";

import React from "react";
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
  showNavbar = true,
  showSidebar = true,
}: AppShellProps) {
  const { isCollapsed } = useSidebar();

  // On mobile, if either navbar or sidebar is enabled, show both for better UX
  const showNavbarOnMobile = showNavbar || showSidebar;
  const showSidebarOnMobile = showNavbar || showSidebar;

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      {/* Top Navbar - show on mobile if either component is enabled, show on desktop based on prop */}
      <div className={showNavbarOnMobile ? "lg:block" : "hidden"}>
        {showNavbar && <Navbar />}
      </div>
      <div
        className={showNavbarOnMobile && !showNavbar ? "lg:hidden" : "hidden"}
      >
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar - show on mobile if either component is enabled, show on desktop based on prop */}
        <div className={showSidebarOnMobile ? "lg:block" : "hidden"}>
          {showSidebar && <Sidebar hasNavbar={showNavbar} />}
        </div>
        <div
          className={
            showSidebarOnMobile && !showSidebar ? "lg:hidden" : "hidden"
          }
        >
          <Sidebar hasNavbar={showNavbar || showSidebar} />
        </div>

        {/* Main Content Area */}
        <main
          className={`
            flex-1 min-h-screen transition-all duration-300
            ${showNavbarOnMobile ? "pt-16 lg:pt-0" : "pt-0"}
            ${showNavbar ? "lg:pt-16" : ""}
            ${showSidebarOnMobile ? "lg:pl-0" : "pl-0"}
            ${showSidebar ? (isCollapsed ? "lg:pl-16" : "lg:pl-64") : ""}
          `}
        >
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
