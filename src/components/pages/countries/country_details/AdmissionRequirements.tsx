import AdmissionRequirementsCard from "./AdmissionRequirementsCard";

const AdmissionRequirements = ({ countryInfo }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {countryInfo.admission_requirments[0].list.map((requirment) => (
        <AdmissionRequirementsCard
          key={requirment.title}
          requirment={requirment}
        />
      ))}
     
    </div>
  );
};

export default AdmissionRequirements;
