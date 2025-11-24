"use client";

import React, { useMemo } from "react";
import Calendar from "../../../components/core/Calendar";
interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface Props {
  selectedDate: string;
  selectedTime: string;
  timeSlots: TimeSlot[];
  onDateChange: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const DateTimeSelectionStep: React.FC<Props> = ({
  selectedDate,
  selectedTime,
  timeSlots,
  onDateChange,
  onTimeSelect,
}) => {
  // Generate next 30 days starting from today
  const next30Days = useMemo(() => {
    const days: { date: string; label: string }[] = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split("T")[0]; // YYYY-MM-DD
      const label = d.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
      days.push({ date: dateStr, label });
    }
    return days;
  }, []);

  return (
    <div className="space-y-8 space-x-8 p-6 flex">
      {/* Date Picker */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Select Date
        </label>
        <Calendar
          onDateSelect={onDateChange}
          selectedDateString={selectedDate}
        />
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div>
          <label className="block text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Available Time Slots
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                onClick={() => slot.available && onTimeSelect(slot.time)}
                className={`p-3 rounded-lg text-center border cursor-pointer transition
                  ${
                    !slot.available
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                      : selectedTime === slot.time
                      ? "bg-teal-600 text-white"
                      : "bg-white dark:bg-gray-700 dark:border-gray-500 dark:text-white hover:bg-blue-100"
                  }
                `}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelectionStep;
