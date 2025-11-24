"use client";

import React from "react";

import BookingPage from "@/components/booking/BookingPage";
import PatientProfile from "@/components/patient/PatientProfile";

const BookingRoute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <BookingPage />
    </div>
  );
};

export default BookingRoute;
