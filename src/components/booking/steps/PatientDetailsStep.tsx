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
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  notes: string;
  selectedService?: Service;
  selectedDoctor?: Doctor;
  selectedDate: string;
  selectedTime: string;
  onNameChange: (val: string) => void;
  onEmailChange: (val: string) => void;
  onPhoneChange: (val: string) => void;
  onNotesChange: (val: string) => void;
}

const PatientDetailsStep: React.FC<Props> = ({
  patientName,
  patientEmail,
  patientPhone,
  notes,
  selectedService,
  selectedDoctor,
  selectedDate,
  selectedTime,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onNotesChange,
}) => {
  return (
    <div className="space-y-10">
      {/* Summary */}
      <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Appointment Summary
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Service:</strong> {selectedService?.name}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Doctor:</strong> Dr. {selectedDoctor?.name}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Date:</strong> {selectedDate}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Time:</strong> {selectedTime}
        </p>
      </div>

      {/* Patient Name */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Full Name
        </label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full mt-2 border rounded-lg p-3 dark:bg-gray-700 dark:text-white dark:border-gray-500"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Email Address
        </label>
        <input
          type="email"
          value={patientEmail}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full mt-2 border rounded-lg p-3 dark:bg-gray-700 dark:text-white dark:border-gray-500"
          placeholder="Enter your email"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Phone Number
        </label>
        <input
          type="tel"
          value={patientPhone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className="w-full mt-2 border rounded-lg p-3 dark:bg-gray-700 dark:text-white dark:border-gray-500"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 dark:text-white">
          Additional Notes (Optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          rows={4}
          className="w-full mt-2 border rounded-lg p-3 dark:bg-gray-700 dark:text-white dark:border-gray-500"
          placeholder="Any additional instructions?"
        />
      </div>
    </div>
  );
};

export default PatientDetailsStep;
