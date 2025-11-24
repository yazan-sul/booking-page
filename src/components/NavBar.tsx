"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Globe, Laptop, PanelLeft } from "lucide-react";
import Menu, { MenuItem } from "./Menu";

interface TopNavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}
const TopNavbar: React.FC<TopNavbarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  pageTitle,
}) => {
  const [themeMode, setThemeMode] = React.useState<"light" | "dark" | "system">(
    "system"
  );
  const [language, setLanguage] = React.useState<"EN" | "ES">("EN");

  const isDarkMode =
    themeMode === "dark" ||
    (themeMode === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  React.useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = (mode: "light" | "dark" | "system") =>
    setThemeMode(mode);
  const toggleLanguage = (lang: "EN" | "ES") => setLanguage(lang);

  const topMenuItems: MenuItem[] = [
    {
      name: "Theme",
      icon: isDarkMode ? Moon : Sun,
      subItems: [
        { name: "Light", icon: Sun, onClick: () => toggleDarkMode("light") },
        { name: "Dark", icon: Moon, onClick: () => toggleDarkMode("dark") },
        {
          name: "System",
          icon: Laptop,
          onClick: () => toggleDarkMode("system"),
        },
      ],
    },
    {
      name: language,
      icon: Globe,
      subItems: [
        { name: "English", icon: Globe, onClick: () => toggleLanguage("EN") },
        { name: "العربية", icon: Globe, onClick: () => toggleLanguage("ES") },
      ],
    },
  ];

  return (
    <header className="w-full h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 md:px-10 shadow-sm">
      {/* Left side: toggle + page title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <PanelLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />

        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {pageTitle}
        </span>
      </div>

      {/* Right side: theme/language menu */}
      <Menu items={topMenuItems} hideMainName={true} className="flex gap-2" />
    </header>
  );
};

export default TopNavbar;
