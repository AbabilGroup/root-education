import { Study_Country } from "@/types/country";
import ApplicationProceduresCard from "./ApplicationProceduresCard";

const ApplicationProcedures = ({
  countryInfo,
}: {
  countryInfo: Study_Country;
}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
      {countryInfo.application_procedures.applicationprocedureslist.map(
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
