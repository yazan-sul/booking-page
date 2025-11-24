"use client";

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
  isServiceDropdownOpen: boolean;
  isDoctorDropdownOpen: boolean;
  onServiceDropdownToggle: () => void;
  onDoctorDropdownToggle: () => void;
  onServiceSelect: (id: string) => void;
  onDoctorSelect: (id: string) => void;
}

const ServiceSelectionStep: React.FC<Props> = ({
  services,
  doctors,
  selectedService,
  selectedDoctor,
  isServiceDropdownOpen,
  isDoctorDropdownOpen,
  onServiceDropdownToggle,
  onDoctorDropdownToggle,
  onServiceSelect,
  onDoctorSelect,
}) => {
  return (
    <div className="space-y-8">
      {/* Service Dropdown */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Select Service
        </label>

        <div
          className="mt-3 border rounded-lg p-3 cursor-pointer dark:border-gray-600"
          onClick={onServiceDropdownToggle}
        >
          {selectedService
            ? services.find((s) => s.id === selectedService)?.name
            : "Choose a service"}
        </div>

        {isServiceDropdownOpen && (
          <div className="mt-2 border rounded-lg bg-white dark:bg-gray-700 shadow-lg">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <div className="font-medium">{service.name}</div>
                <div className="text-sm text-gray-500">
                  {service.duration} • {service.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Doctor Dropdown */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Select Doctor
        </label>

        <div
          className="mt-3 border rounded-lg p-3 cursor-pointer dark:border-gray-600"
          onClick={onDoctorDropdownToggle}
        >
          {selectedDoctor
            ? doctors.find((d) => d.id === selectedDoctor)?.name
            : "Choose a doctor"}
        </div>

        {isDoctorDropdownOpen && (
          <div className="mt-2 border rounded-lg bg-white dark:bg-gray-700 shadow-lg">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                onClick={() => onDoctorSelect(doctor.id)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <div className="font-medium">{doctor.name}</div>
                <div className="text-sm text-gray-500">
                  {doctor.specialization} — {doctor.credentials}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelectionStep;
