"use client";

import Link from "next/link";
import { useSidebar } from "@/lib/sidebar-context";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MenuIcon, CloseIcon, UserIcon } from "@/components/icons";

export function Navbar() {
  const { isMobileOpen, toggleMobile } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-navbar-bg backdrop-blur-md border-b border-navbar-border">
      <div className="h-full px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-full">
          {/* Left section */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-interactive-bg hover:text-text-primary transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="px-4 text-xl sm:text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors"
            >
              NextTemplate
            </Link>
          </div>

          {/* Center section - Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/analytics">Analytics</NavLink>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* User menu placeholder */}
            <div className="hidden sm:flex items-center">
              <button
                className="flex items-center gap-2 p-1.5 rounded-lg text-text-secondary hover:bg-interactive-bg transition-colors"
                aria-label="User menu"
              >
                <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-text-inverse text-sm font-medium">
                  <UserIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper component for navigation links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-text-secondary hover:text-text-primary transition-colors font-medium"
    >
      {children}
    </Link>
  );
}
