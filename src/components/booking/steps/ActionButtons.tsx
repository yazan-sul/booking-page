"use client";

import Button from "../../../components/core/Button";

interface ActionButtonsProps {
  currentStep: number;
  isStepValid: boolean;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  currentStep,
  isStepValid,
  onBack,
  onNext,
  onCancel,
  onSubmit,
}) => {
  return (
    <div className="flex justify-between px-6 md:px-8 py-6 border-t bg-gray-50 dark:bg-gray-700">
      <Button
        onClick={onCancel}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
      >
        Cancel
      </Button>

      <div className="flex items-center space-x-3">
        {currentStep > 1 && (
          <Button
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            Back
          </Button>
        )}

        {currentStep < 3 && (
          <Button
            onClick={onNext}
            disabled={!isStepValid}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-40 hover:bg-blue-700"
          >
            Next
          </Button>
        )}

        {currentStep === 3 && (
          <Button
            onClick={onSubmit}
            disabled={!isStepValid}
            className="px-6 py-2 bg-green-600 text-white rounded-lg disabled:opacity-40 hover:bg-green-700"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
