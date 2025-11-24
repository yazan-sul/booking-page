"use client";

import React, { useState } from "react";
import PatientHeader from "./PatientHeader";
import PatientContact from "./PatientContact";
import PatientAppointments from "./PatientAppointments";
import ToothDetails from "./ToothDetails";
import Legend from "./Legend";
import MedicalHistory from "./MedicalHistory";
import TeethContainer from "./TeethContainer";

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

export interface Tooth {
  number: number;
  name: string;
  condition: "Healthy" | "Cavity" | "Filled" | "Crown" | "Missing";
  notes?: string;
}

export interface MedicalRecord {
  date: string;
  procedure: string;
  doctor: string;
  status: string;
}

const PatientProfile: React.FC = () => {
  const [selectedTooth, setSelectedTooth] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const patient: Patient = {
    name: "Yazan Sulaiman",
    age: 22,
    gender: "Male",
    bloodType: "A+",
    phone: "+1 (555) 123-4567",
    email: "Yazan.sulaiman@email.com",
    address: "123 Main St, New York, NY 10001",
    dateOfBirth: "1991-05-15",
    lastVisit: "2024-11-15",
    nextAppointment: "2024-12-05",
  };

  const teethData: Record<number, Tooth> = {
    /* your teeth data here */
  };

  const medicalHistory: MedicalRecord[] = [
    /* your history data */
  ];

  return (
    <div className=" bg-white dark:bg-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <PatientHeader patient={patient} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <PatientContact patient={patient} />
            <PatientAppointments patient={patient} />
          </div>
          <TeethContainer />
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
