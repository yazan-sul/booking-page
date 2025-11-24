"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import UserProfile from "./UserProfile";

import {
  Calendar,
  CreditCard,
  DollarSign,
  Settings,
  Phone,
  FileText,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarProps {
  isOpen: boolean; // controlled from parent
  toggleSidebar: () => void; // function to toggle
  isMobile?: boolean; // optional, parent can pass if needed
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  isMobile = false,
}) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const mainNavItems: NavItem[] = [
    { name: "Booking", href: "/booking", icon: Calendar },
    { name: "Patient", href: "/patient", icon: CreditCard },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
  ];

  const bottomNavItems: NavItem[] = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Docs", href: "/docs", icon: FileText },
  ];

  const sidebarWidth = isOpen ? "w-64" : "w-16";

  return (
    <aside
      ref={sidebarRef}
      className={`${isMobile ? "fixed" : "relative"} ${
        isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
      } ${sidebarWidth} h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out flex flex-col shadow-xl`}
      aria-label="Main navigation"
    >
      <SidebarHeader
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />

      {/* MAIN NAV */}
      <SidebarNav
        items={mainNavItems}
        isOpen={isOpen}
        pathname={pathname}
        onItemClick={() => isMobile && toggleSidebar()}
      />

      {/* BOTTOM SECTION — stick to bottom */}
      <div className="mt-auto flex flex-col">
        <SidebarNav
          items={bottomNavItems}
          isOpen={isOpen}
          pathname={pathname}
          onItemClick={() => isMobile && toggleSidebar()}
        />
        <div className="p-2">
          <UserProfile isOpen={isOpen} />
        </div>{" "}
      </div>
    </aside>
  );
};

export default Sidebar;
