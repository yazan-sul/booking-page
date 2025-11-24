"use client";

import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ServiceSelectionStep from "./steps/ServiceSelectionStep";
import DateTimeSelectionStep from "./steps/DateTimeSelectionStep";
import PatientDetailsStep from "./steps/PatientDetailsStep";
import ConfirmationStep from "./steps/ConfirmationStep";
import ActionButtons from "./steps/ActionButtons";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  credentials: string;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isDoctorDropdownOpen, setIsDoctorDropdownOpen] = useState(false);

  const services: Service[] = [
    { id: "1", name: "General Consultation", duration: "30 min", price: "$50" },
    { id: "2", name: "Dental Cleaning", duration: "45 min", price: "$80" },
    { id: "3", name: "Eye Examination", duration: "30 min", price: "$60" },
    { id: "4", name: "Physical Therapy", duration: "60 min", price: "$100" },
    { id: "5", name: "Vaccination", duration: "15 min", price: "$40" },
  ];

  const doctors: Doctor[] = [
    {
      id: "1",
      name: "Ahmad Dimas",
      specialization: "General Medicine",
      credentials: "Sp.BM, M.Kes",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      specialization: "Dentistry",
      credentials: "DDS, MS",
    },
    {
      id: "3",
      name: "Michael Chen",
      specialization: "Ophthalmology",
      credentials: "MD, PhD",
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      specialization: "Physical Therapy",
      credentials: "DPT, OCS",
    },
  ];

  const timeSlots: TimeSlot[] = [
    { id: "1", time: "09:00 AM", available: true },
    { id: "2", time: "09:30 AM", available: true },
    { id: "3", time: "10:00 AM", available: false },
    { id: "4", time: "10:30 AM", available: true },
    { id: "5", time: "11:00 AM", available: true },
    { id: "6", time: "11:30 AM", available: true },
    { id: "7", time: "02:00 PM", available: true },
    { id: "8", time: "02:30 PM", available: false },
    { id: "9", time: "03:00 PM", available: true },
    { id: "10", time: "03:30 PM", available: true },
    { id: "11", time: "04:00 PM", available: true },
    { id: "12", time: "04:30 PM", available: true },
  ];

  const steps = [
    { number: 1, label: "Service" },
    { number: 2, label: "Time" },
    { number: 3, label: "Details" },
    { number: 4, label: "Done" },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setSelectedService("");
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
    setPatientName("");
    setPatientEmail("");
    setPatientPhone("");
    setNotes("");
  };

  const handleSubmit = () => {
    console.log("Appointment submitted:", {
      service: selectedService,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      patient: { name: patientName, email: patientEmail, phone: patientPhone },
      notes,
    });
    setCurrentStep(4);
  };
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsServiceDropdownOpen(false);
  };

  const handleDoctorSelect = (doctorId: string) => {
    setSelectedDoctor(doctorId);
    setIsDoctorDropdownOpen(false);
  };
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!(selectedService && selectedDoctor);
      case 2:
        return !!(selectedDate && selectedTime);
      case 3:
        return !!(patientName && patientEmail && patientPhone);
      default:
        return true;
    }
  };

  const getSelectedService = () =>
    services.find((s) => s.id === selectedService);
  const getSelectedDoctor = () => doctors.find((d) => d.id === selectedDoctor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-teal-200 to-teal-400 dark:from-teal-700 dark:to-teal-600 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-800 dark:text-white">
              Book Appointment
            </h1>
          </div>

          {/* Progress Bar */}
          <ProgressBar steps={steps} currentStep={currentStep} />

          {currentStep === 1 && (
            <ServiceSelectionStep
              services={services}
              doctors={doctors}
              selectedService={selectedService}
              selectedDoctor={selectedDoctor}
              onServiceSelect={handleServiceSelect}
              onDoctorSelect={handleDoctorSelect}
            />
          )}
          {currentStep === 2 && (
            <DateTimeSelectionStep
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timeSlots={timeSlots}
              onDateChange={setSelectedDate}
              onTimeSelect={setSelectedTime}
            />
          )}

          {currentStep === 3 && (
            <PatientDetailsStep
              patientName={patientName}
              patientEmail={patientEmail}
              patientPhone={patientPhone}
              notes={notes}
              selectedService={getSelectedService()}
              selectedDoctor={getSelectedDoctor()}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onNameChange={setPatientName}
              onEmailChange={setPatientEmail}
              onPhoneChange={setPatientPhone}
              onNotesChange={setNotes}
            />
          )}

          {currentStep === 4 && (
            <ConfirmationStep
              selectedDoctor={getSelectedDoctor()}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              patientEmail={patientEmail}
              onBookAnother={handleCancel}
            />
          )}
        </div>

        {/* Action Buttons */}
        {currentStep < 4 && (
          <ActionButtons
            currentStep={currentStep}
            isStepValid={isStepValid()}
            onBack={handleBack}
            onNext={handleNext}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
