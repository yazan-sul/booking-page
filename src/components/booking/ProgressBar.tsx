import React from "react";
import { Check } from "lucide-react";

interface Step {
  number: number;
  label: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="px-6 md:px-8 py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep > step.number
                    ? "bg-green-500 text-white"
                    : currentStep === step.number
                    ? "bg-teal-400 text-white shadow-lg scale-110"
                    : "bg-gray-400 dark:bg-teal-500 text-white dark:text-teal-300"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
              </div>
              <span className="text-xs md:text-sm mt-2 text-gray-600 dark:text-gray-400">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                  currentStep > step.number
                    ? "bg-green-500"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
