import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div
        className="absolute left-full ml-2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-md 
                      opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200
                      whitespace-nowrap z-50 invisible group-hover:visible"
      >
        {text}
        <div
          className="absolute top-1/2 -left-1 transform -translate-y-1/2 
                        w-0 h-0 border-t-4 border-t-transparent 
                        border-r-4 border-r-gray-800 dark:border-r-gray-700
                        border-b-4 border-b-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;
