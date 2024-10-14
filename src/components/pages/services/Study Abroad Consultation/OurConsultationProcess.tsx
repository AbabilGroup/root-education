import Section from "@/components/common/Section";

const OurConsultationProcess = () => {
  return (
    <Section
      sectionName="Our Consultation Process"
      title="Step-by-Step Guidance"
    >
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
        {/* card  */}
        <div className="flex min-h-[144px] max-w-[600px] items-center justify-between gap-x-5 rounded-full border p-4 shadow-lg">
          <div className="size-[40px] min-h-full basis-[25%] rounded-full border">
            <div className="m-4 h-full w-full rounded-full bg-primary">
              {" "}
              000
            </div>
          </div>
          <div className="basis-[50%] text-center">
            <h3 className="text-2xl font-semibold">Initial Assessment</h3>
            <p className="text-sm font-medium">
              We start by understanding your academic background, career goals,
              and preferences.
            </p>
          </div>
          <div className="basis-[25%]"></div>
        </div>
      </div>
    </Section>
  );
};

export default OurConsultationProcess;
