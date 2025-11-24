// TeethContainer.tsx
import React, { useState } from "react";

import EnhancedTeethViewer from "./DentalChart";
import TeethMenu from "./TeethMenu";

export default function TeethContainer() {
  const [hoveredTooth, setHoveredTooth] = useState<string | null>(null);
  const [selectedTooth, setSelectedTooth] = useState<string | null>(null);

  const TOOTH_MAPPING: Record<string, string> = {
    // Upper Right Quadrant (11-18)
    // 'polySurface39051': 'Tooth 11 - Central Incisor',  // ❌ Not a tooth (removed)
    polySurface39052: "Tooth 12 - Lateral Incisor",
    polySurface39053: "Tooth 13 - Canine",
    polySurface39054: "Tooth 14 - First Premolar",
    polySurface39055: "Tooth 15 - Second Premolar",
    polySurface39056: "Tooth 16 - First Molar",
    polySurface39057: "Tooth 17 - Second Molar",
    polySurface39058: "Tooth 18 - Third Molar",

    // Upper Left Quadrant (21-28)
    polySurface39059: "Tooth 21 - Central Incisor",
    polySurface39060: "Tooth 22 - Lateral Incisor",
    polySurface39061: "Tooth 23 - Canine",
    polySurface39062: "Tooth 24 - First Premolar",
    polySurface39063: "Tooth 25 - Second Premolar",
    polySurface39064: "Tooth 26 - First Molar",
    polySurface39065: "Tooth 27 - Second Molar",
    polySurface39066: "Tooth 28 - Third Molar",

    // Lower Left Quadrant (31-38)
    polySurface39067: "Tooth 31 - Central Incisor",
    polySurface39068: "Tooth 32 - Lateral Incisor",
    polySurface39069: "Tooth 33 - Canine",
    polySurface39070: "Tooth 34 - First Premolar",
    polySurface39071: "Tooth 35 - Second Premolar",
    polySurface39072: "Tooth 36 - First Molar",
    polySurface39073: "Tooth 37 - Second Molar",
    polySurface39074: "Tooth 38 - Third Molar",

    // Lower Right Quadrant (41-48)
    polySurface39075: "Tooth 41 - Central Incisor",
    polySurface39076: "Tooth 42 - Lateral Incisor",
    polySurface39077: "Tooth 43 - Canine",
    polySurface39078: "Tooth 44 - First Premolar",
    polySurface39079: "Tooth 45 - Second Premolar",
    polySurface39080: "Tooth 46 - First Molar",
    polySurface39081: "Tooth 47 - Second Molar",
    polySurface39082: "Tooth 48 - Third Molar",
  };
  const teethMenuItems = Object.keys(TOOTH_MAPPING).map((key) => ({
    name: TOOTH_MAPPING[key],
    icon: () => <span className="w-3 h-3 rounded-full bg-gray-400 block" />,
    onClick: () => setSelectedTooth(key),
  }));

  return (
    <div className="flex  w-full h-full bg-amber-50 ">
      <TeethMenu
        hoveredTooth={hoveredTooth}
        setHoveredTooth={setHoveredTooth}
        setSelectedTooth={setSelectedTooth}
        selectedTooth={selectedTooth}
      />
      <div className="flex  p-2">
        <EnhancedTeethViewer
          externalHoveredTooth={hoveredTooth}
          externalSelectedTooth={selectedTooth}
          onToothClick={(tooth) => setSelectedTooth(tooth.name)}
          onToothHover={(tooth) => setHoveredTooth(tooth?.name || null)}
        />
      </div>
    </div>
  );
}
