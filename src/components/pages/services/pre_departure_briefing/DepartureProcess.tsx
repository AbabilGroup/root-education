import Section from "@/components/common/Section";
import AssistanceProcessCard from "./AssistanceProcessCard";

const DepartureProcess = () => {
  return (
    <Section
      sectionName="Application Assistance Process"
      title="Our Step-by-Step Application Assistance Process"
    >
      <div className="container mt-20 grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        <AssistanceProcessCard
          stepNo={1}
          title="Initial Consultation"
          description="Personalized discussion to understand your needs and study destination, ensuring tailored guidance for preparation."
          iconNo={1}
        />
        <AssistanceProcessCard
          stepNo={2}
          title="Documentation Review"
          description="Assistance in organizing and reviewing essential documents, including visas, health insurance, and travel paperwork."
          iconNo={2}
        />
        <AssistanceProcessCard
          stepNo={3}
          title="Cultural Orientation"
          description="Participate in sessions covering cultural norms and practices to enhance your study abroad experience."
          iconNo={3}
        />
        <AssistanceProcessCard
          stepNo={4}
          title="Packing Preparation"
          description="Prepare with a customized packing checklist, ensuring you have everything you need for your journey."
          iconNo={4}
        />
        <AssistanceProcessCard
          stepNo={5}
          title="Health & Safety Briefing"
          description="Understand local healthcare options, emergency contacts, and essential safety tips for a secure study abroad experience."
          iconNo={5}
        />
        <AssistanceProcessCard
          stepNo={6}
          title="Financial Planning Session"
          description="Receive guidance on budgeting, managing expenses, and setting up banking for your study abroad experience."
          iconNo={6}
        />
      </div>
    </Section>
  );
};

export default DepartureProcess;
