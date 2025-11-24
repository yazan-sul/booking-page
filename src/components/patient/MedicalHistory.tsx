import React from "react";
import { FileText } from "lucide-react";

export interface MedicalRecord {
  date: string;
  procedure: string;
  doctor: string;
  status: string;
}

interface Props {
  medicalHistory: MedicalRecord[];
}

const MedicalHistory: React.FC<Props> = ({ medicalHistory }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
      <FileText className="text-blue-600" />
      Medical History
    </h2>

    <div className="space-y-3">
      {medicalHistory.map((record, index) => (
        <div
          key={index}
          className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p>{record.date}</p>
            </div>

            <div className="w-px h-10 bg-gray-300" />

            <div>
              <p className="font-medium">{record.procedure}</p>
              <p className="text-sm text-gray-600">{record.doctor}</p>
            </div>
          </div>

          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {record.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default MedicalHistory;
