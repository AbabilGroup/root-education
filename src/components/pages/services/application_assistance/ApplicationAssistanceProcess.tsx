import Section from "@/components/common/Section";
import AssistanceProcessCard from "./AssistanceProcessCard";

const ApplicationAssistanceProcess = () => {
  return (
    <Section
      sectionName="Application Assistance Process"
      title="Our Step-by-Step Application Assistance Process"
    >
      <div className="container mt-20 grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        <AssistanceProcessCard
          stepNo={1}
          iconNo={1}
          title="Initial Consultation"
          description="Schedule a one-on-one session to assess the student’s needs, goals, and preferred study destinations."
        />
        <AssistanceProcessCard
          stepNo={2}
          iconNo={2}
          title="Personalized Action Plan"
          description="Develop a tailored roadmap outlining key milestones and timelines for the application process."
        />
        <AssistanceProcessCard
          stepNo={3}
          iconNo={3}
          title="Document Preparation"
          description="Provide detailed checklists for required documents specific to each university and program."
        />
        <AssistanceProcessCard
          stepNo={4}
          iconNo={4}
          title="Application Review"
          description="Conduct thorough reviews of completed applications, ensuring they meet all criteria and standards."
        />
        <AssistanceProcessCard
          stepNo={5}
          iconNo={5}
          title="Submission Guidance"
          description="Offer support during the submission process, including deadlines, online portal navigation, and troubleshooting."
        />
        <AssistanceProcessCard
          stepNo={6}
          iconNo={6}
          title="Post-Submission Support"
          description="Ongoing support after submission, assisting with university updates, additional requirements, and offer responses."
        />
      </div>
    </Section>
  );
};

export default ApplicationAssistanceProcess;
