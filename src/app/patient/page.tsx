import PatientProfile from "@/components/patient/PatientProfile";

const PatientPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <PatientProfile />
      </div>
    </div>
  );
};

export default PatientPage;
