// components/NavBar.tsx
"use client";

import React from "react";
import { Sun, Moon, Globe, Laptop, PanelLeft } from "lucide-react";
import Menu, { MenuItem } from "./Menu";
import { useTheme } from "@/context/ThemeContext"; // Use ThemeContext to access theme state

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
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context
  const [language, setLanguage] = React.useState<"EN" | "ES">("EN");

  // Check if the current theme is dark
  const isDarkMode = theme === "dark";

  const toggleLanguage = (lang: "EN" | "ES") => setLanguage(lang);

  const topMenuItems: MenuItem[] = [
    {
      name: "Theme",
      icon: isDarkMode ? Moon : Sun,
      subItems: [
        { name: "Light", icon: Sun, onClick: () => toggleTheme("light") }, // Pass 'light' to toggleTheme
        { name: "Dark", icon: Moon, onClick: () => toggleTheme("dark") }, // Pass 'dark' to toggleTheme
        {
          name: "System",
          icon: Laptop,
          onClick: () => toggleTheme("system"), // Pass 'system' to toggleTheme
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
    <header className="w-full h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 py-2 md:px-10 shadow-sm">
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
      <Menu
        items={topMenuItems}
        hideMainName={true}
        className="flex flex-row gap-2"
      />
    </header>
  );
};

export default TopNavbar;
