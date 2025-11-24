import React, { JSX, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (dateString: string) => void;
  selectedDateString?: string;
}

export default function Calendar({
  initialDate,
  onDateSelect,
  selectedDateString,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date>(
    initialDate || new Date()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    selectedDateString ? new Date(selectedDateString) : null
  );

  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);

    if (onDateSelect) {
      // Format as YYYY-MM-DD to match your component's expected format
      const year = newDate.getFullYear();
      const month = String(newDate.getMonth() + 1).padStart(2, "0");
      const dayStr = String(newDate.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${dayStr}`;
      onDateSelect(dateString);
    }
  };

  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (day: number): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return dateToCheck < today;
  };

  const renderCalendarDays = (): JSX.Element[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days: JSX.Element[] = [];

    // Previous month's trailing days
    const prevMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="p-3 text-center text-gray-300 dark:text-gray-600"
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear();

      const isTodayDate = isToday(day);
      const isPast = isPastDate(day);

      days.push(
        <div
          key={`current-${day}`}
          onClick={() => !isPast && handleDateClick(day)}
          className={`p-3 text-center rounded-lg transition-colors ${
            isPast
              ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
              : isSelected
              ? "bg-teal-600 text-white cursor-pointer"
              : isTodayDate
              ? "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-800"
              : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
          }`}
        >
          {day}
        </div>
      );
    }

    // Next month's leading days
    const totalCells = days.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="p-3 text-center text-gray-300 dark:text-gray-600"
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold dark:text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} className="dark:text-white" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={20} className="dark:text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day: string) => (
          <div
            key={day}
            className="p-3 text-center font-medium text-sm text-gray-600 dark:text-gray-400"
          >
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
}
