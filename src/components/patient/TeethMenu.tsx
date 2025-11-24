"use client";

import React from "react";
import Menu, { MenuItem } from "@/components/Menu";

const TOOTH_MAPPING: Record<string, string> = {
  polySurface39052: "Tooth 12 - Lateral Incisor",
  polySurface39053: "Tooth 13 - Canine",
  polySurface39054: "Tooth 14 - First Premolar",
  polySurface39055: "Tooth 15 - Second Premolar",
  polySurface39056: "Tooth 16 - First Molar",
  polySurface39057: "Tooth 17 - Second Molar",
  polySurface39058: "Tooth 18 - Third Molar",
  polySurface39059: "Tooth 21 - Central Incisor",
  polySurface39060: "Tooth 22 - Lateral Incisor",
  polySurface39061: "Tooth 23 - Canine",
  polySurface39062: "Tooth 24 - First Premolar",
  polySurface39063: "Tooth 25 - Second Premolar",
  polySurface39064: "Tooth 26 - First Molar",
  polySurface39065: "Tooth 27 - Second Molar",
  polySurface39066: "Tooth 28 - Third Molar",
  polySurface39067: "Tooth 31 - Central Incisor",
  polySurface39068: "Tooth 32 - Lateral Incisor",
  polySurface39069: "Tooth 33 - Canine",
  polySurface39070: "Tooth 34 - First Premolar",
  polySurface39071: "Tooth 35 - Second Premolar",
  polySurface39072: "Tooth 36 - First Molar",
  polySurface39073: "Tooth 37 - Second Molar",
  polySurface39074: "Tooth 38 - Third Molar",
  polySurface39075: "Tooth 41 - Central Incisor",
  polySurface39076: "Tooth 42 - Lateral Incisor",
  polySurface39077: "Tooth 43 - Canine",
  polySurface39078: "Tooth 44 - First Premolar",
  polySurface39079: "Tooth 45 - Second Premolar",
  polySurface39080: "Tooth 46 - First Molar",
  polySurface39081: "Tooth 47 - Second Molar",
  polySurface39082: "Tooth 48 - Third Molar",
};

// Tooth Icon Component
const ToothIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2c-1.5 0-2.5 1-3 2.5-.5 1.5-.5 3-.5 4.5 0 2-1 3-1 5s.5 4 1.5 5 2 1 3 1 2 0 3-1 1.5-3 1.5-5-.5-3-1-5c0-1.5 0-3-.5-4.5C14.5 3 13.5 2 12 2z" />
  </svg>
);

interface TeethMenuProps {
  hoveredTooth: string | null;
  setHoveredTooth: (tooth: string | null) => void;
  setSelectedTooth: (tooth: string | null) => void;
  selectedTooth?: string | null;
  className?: string;
}

const TeethMenu: React.FC<TeethMenuProps> = ({
  hoveredTooth,
  setHoveredTooth,
  setSelectedTooth,
  selectedTooth = null,
  className = "",
}) => {
  // Create sub-items for each tooth
  const teethSubItems: MenuItem[] = Object.keys(TOOTH_MAPPING).map((key) => ({
    name: TOOTH_MAPPING[key],
    icon: ({ className }: { className?: string }) => (
      <span className={`w-3 h-3 rounded-full bg-gray-400 block ${className}`} />
    ),
    onClick: () => setSelectedTooth(key),
    onHover: () => setHoveredTooth(key),
    onLeave: () => setHoveredTooth(null),
    isActive: selectedTooth === key,
    isHovered: hoveredTooth === key,
  }));

  // Main menu item with dropdown
  const menuItems: MenuItem[] = [
    {
      name: "Teeth",
      icon: ToothIcon,
      subItems: teethSubItems,
    },
  ];

  return (
    <Menu
      items={menuItems}
      className={className}
      hideMainName={false}
      orientation="vertical"
      dropdownPosition="right"
    />
  );
};

export default TeethMenu;
