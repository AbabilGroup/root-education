import { Root } from "@/types";
import AdmissionRequirementsCard from "./AdmissionRequirementsCard";

const AdmissionRequirements = ({ countryInfo }: { countryInfo: Root }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {countryInfo.admission_requirments[0].list.map((requirement) => (
        <AdmissionRequirementsCard
          key={requirement.title}
          requirement={requirement}
        />
      ))}
    </div>
  );
};

export default AdmissionRequirements;
