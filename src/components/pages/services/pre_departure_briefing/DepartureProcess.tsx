import Section from "@/components/common/Section";
import AssistanceProcessCard from "./AssistanceProcessCard";

const DepartureProcess = () => {
  return (
    <Section
      sectionName="Application Assistance Process"
      title="Our Step-by-Step Application Assistance Process"
    >
      <div className="container mt-20 grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        <AssistanceProcessCard />
        <AssistanceProcessCard />
        <AssistanceProcessCard />
        <AssistanceProcessCard />
        <AssistanceProcessCard />
        <AssistanceProcessCard />
      </div>
    </Section>
  );
};

export default DepartureProcess;
