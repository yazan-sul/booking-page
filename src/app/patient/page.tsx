import PatientProfile from "@/components/patient/PatientProfile";

const PatientPage = () => {
  return (
    <div className="  bg-white dark:bg-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <PatientProfile />
      </div>
    </div>
  );
};

export default PatientPage;
