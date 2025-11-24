"use client";

import React from "react";
import Menu, { MenuItem } from "@/components/Menu";

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

interface Props {
  services: Service[];
  doctors: Doctor[];
  selectedService: string;
  selectedDoctor: string;
  onServiceSelect: (id: string) => void;
  onDoctorSelect: (id: string) => void;
}

// Service Icon
const ServiceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

// Doctor Icon
const DoctorIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Item Icon
const ItemIcon = ({ className }: { className?: string }) => (
  <span className={`w-2 h-2 rounded-full bg-gray-400 block ${className}`} />
);

const ServiceSelectionStep: React.FC<Props> = ({
  services,
  doctors,
  selectedService,
  selectedDoctor,
  onServiceSelect,
  onDoctorSelect,
}) => {
  // Convert services to menu items
  const serviceMenuItems: MenuItem[] = services.map((service) => ({
    name: service.name,
    icon: ItemIcon,
    onClick: () => onServiceSelect(service.id),
    isActive: selectedService === service.id,
  }));

  // Convert doctors to menu items
  const doctorMenuItems: MenuItem[] = doctors.map((doctor) => ({
    name: doctor.name,
    icon: ItemIcon,
    onClick: () => onDoctorSelect(doctor.id),
    isActive: selectedDoctor === doctor.id,
  }));

  const selectedServiceObj = services.find((s) => s.id === selectedService);
  const selectedDoctorObj = doctors.find((d) => d.id === selectedDoctor);

  // Main menu structure
  const menuItems: MenuItem[] = [
    {
      name: selectedServiceObj?.name || "Choose a service",
      icon: ServiceIcon,
      subItems: serviceMenuItems,
    },
    {
      name: selectedDoctorObj?.name || "Choose a doctor",
      icon: DoctorIcon,
      subItems: doctorMenuItems,
    },
  ];

  return (
    <div className="min-h-96 space-y-8 p-3">
      {/* Service Selection */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Select Service
        </label>
        <Menu
          items={[menuItems[0]]}
          orientation="vertical"
          dropdownPosition="bottom"
          hideMainName={false}
        />
        {selectedServiceObj && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {selectedServiceObj.duration} • {selectedServiceObj.price}
          </div>
        )}
      </div>

      {/* Doctor Selection */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Select Doctor
        </label>
        <Menu
          items={[menuItems[1]]}
          orientation="vertical"
          dropdownPosition="bottom"
          hideMainName={false}
        />
        {selectedDoctorObj && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {selectedDoctorObj.specialization} — {selectedDoctorObj.credentials}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelectionStep;
