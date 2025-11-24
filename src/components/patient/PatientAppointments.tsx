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
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-bold mb-4">Appointments</h2>

    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Calendar className="text-green-600" />
          <span>Last Visit</span>
        </div>
        <span>{patient.lastVisit}</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Calendar className="text-orange-600" />
          <span>Next Appointment</span>
        </div>
        <span>{patient.nextAppointment}</span>
      </div>
    </div>
  </div>
);

export default PatientAppointments;
