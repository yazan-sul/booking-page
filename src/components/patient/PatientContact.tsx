import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
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

interface Props {
  patient: Patient;
}
const PatientContact: React.FC<Props> = ({ patient }) => (
  <div className="bg-white dark:bg-gray-500 dark:text-white rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
      Contact Information
    </h2>

    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Phone className="text-blue-600 dark:text-blue-400" />
        <span className="text-gray-800 dark:text-gray-300">
          {patient.phone}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Mail className="text-blue-600 dark:text-blue-400" />
        <span className="text-gray-800 dark:text-gray-300">
          {patient.email}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="text-blue-600 dark:text-blue-400" />
        <span className="text-gray-800 dark:text-gray-300">
          {patient.address}
        </span>
      </div>
    </div>
  </div>
);

export default PatientContact;
