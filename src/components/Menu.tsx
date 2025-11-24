"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  href?: string;
  subItems?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
  hoveredTooth: string | null;
  setHoveredTooth: (name: string | null) => void;
  setSelectedTooth: (name: string | null) => void;
  className?: string;
  hideMainName?: boolean;
}

const Menu: React.FC<MenuProps> = ({
  items,
  hoveredTooth,
  setHoveredTooth,
  setSelectedTooth,
  className = "",
  hideMainName = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const hasDropdown = item.subItems && item.subItems.length > 0;

        return (
          <div key={index} className="relative">
            {/* MAIN BUTTON */}
            <button
              onClick={() =>
                hasDropdown ? toggleDropdown(index) : item.onClick?.()
              }
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              {!hideMainName && !hasDropdown && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
              {hasDropdown && (
                <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
              )}
            </button>

            {/* DROPDOWN */}
            {hasDropdown && openIndex === index && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                {item.subItems!.map((subItem) => {
                  const SubIcon = subItem.icon;

                  const isHovered = hoveredTooth === subItem.name;

                  return (
                    <button
                      key={subItem.name}
                      onMouseEnter={() => setHoveredTooth(subItem.name)}
                      onMouseLeave={() => setHoveredTooth(null)}
                      onClick={() => {
                        setSelectedTooth(subItem.name);
                        subItem.onClick?.();
                        setOpenIndex(null); // close dropdown
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-left transition-colors
                        ${
                          isHovered
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }
                      `}
                    >
                      <SubIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <span className="text-sm">{subItem.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
