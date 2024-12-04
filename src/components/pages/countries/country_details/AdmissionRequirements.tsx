import { Study_Country } from "@/types/country";
import AdmissionRequirementsCard from "./AdmissionRequirementsCard";

const AdmissionRequirements = ({
  countryInfo,
}: {
  countryInfo: Study_Country;
}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {countryInfo.admission_requirments.list.map((requirement) => (
        <AdmissionRequirementsCard
          key={requirement.title}
          requirement={requirement}
        />
      ))}
    </div>
  );
};

export default AdmissionRequirements;
