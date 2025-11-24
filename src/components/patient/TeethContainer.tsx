// TeethContainer.tsx
import React, { useState } from "react";

import EnhancedTeethViewer from "./DentalChart";
import TeethMenu from "./TeethMenu";

export default function TeethContainer() {
  const [hoveredTooth, setHoveredTooth] = useState<string | null>(null);
  const [selectedTooth, setSelectedTooth] = useState<string | null>(null);

  return (
    <div className="flex  w-full h-full bg-white dark:bg-gray-500 rounded-2xl shadow-lg p-2">
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
