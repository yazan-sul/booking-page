import React from "react";

interface Props {
  patient: {
    name: string;
    age: number;
    gender: string;
    bloodType: string;
    phone: string;
    email: string;
    address: string;
    dateOfBirth: string;
    lastVisit: string;
    nextAppointment: string;
  };
}
const PatientHeader: React.FC<Props> = ({ patient }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-500 dark:text-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-inner">
            <span className="text-gray-400 text-4xl dark:text-gray-200">
              👤
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {patient.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Age: {patient.age}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Gender: {patient.gender}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              DOB: {patient.dateOfBirth}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white rounded-xl px-6 py-2 text-sm font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
            Schedule
          </button>

          <button className="border border-gray-300 text-gray-700 rounded-xl px-6 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader;
