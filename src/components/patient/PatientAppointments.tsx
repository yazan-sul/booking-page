import React from "react";
import { Calendar } from "lucide-react";

interface Props {
  patient: Patient;
}
export interface Patient {
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
}
const PatientAppointments: React.FC<Props> = ({ patient }) => (
  <div className="bg-white dark:bg-gray-500 dark:text-white rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
      Appointments
    </h2>

    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Calendar className="text-green-600 dark:text-green-400" />
          <span className="text-gray-800 dark:text-gray-300">Last Visit</span>
        </div>
        <span className="text-gray-800 dark:text-gray-300">
          {patient.lastVisit}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Calendar className="text-orange-600 dark:text-orange-400" />
          <span className="text-gray-800 dark:text-gray-300">
            Next Appointment
          </span>
        </div>
        <span className="text-gray-800 dark:text-gray-300">
          {patient.nextAppointment}
        </span>
      </div>
    </div>
  </div>
);

export default PatientAppointments;
