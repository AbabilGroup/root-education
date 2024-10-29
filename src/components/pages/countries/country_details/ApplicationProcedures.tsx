import { Root } from "@/types";
import ApplicationProceduresCard from "./ApplicationProceduresCard";

const ApplicationProcedures = ({ countryInfo }: { countryInfo: Root }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
      {countryInfo.application_procedures[0].applicationprocedureslist.map(
        (procedure, index) => (
          <ApplicationProceduresCard
            key={procedure.title}
            procedure={procedure}
            index={index}
          />
        ),
      )}
    </div>
  );
};

export default ApplicationProcedures;
