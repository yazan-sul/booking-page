"use client";

import Button from "../../../components/core/Button";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  credentials: string;
}

interface Props {
  selectedDoctor?: Doctor;
  selectedDate: string;
  selectedTime: string;
  patientEmail: string;
  onBookAnother: () => void;
}

const ConfirmationStep: React.FC<Props> = ({
  selectedDoctor,
  selectedDate,
  selectedTime,
  patientEmail,
  onBookAnother,
}) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
        Appointment Confirmed!
      </h2>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You have successfully booked an appointment with
        <br />
        <strong>Dr. {selectedDoctor?.name}</strong>
        <br />
        on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
      </p>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        A confirmation email has been sent to:
        <br />
        <strong>{patientEmail}</strong>
      </p>

      <Button
        onClick={onBookAnother}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
      >
        Book Another Appointment
      </Button>
    </div>
  );
};

export default ConfirmationStep;
