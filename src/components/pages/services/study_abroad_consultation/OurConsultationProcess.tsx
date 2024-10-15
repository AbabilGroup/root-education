import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const OurConsultationProcess = () => {
  return (
    <Section
      sectionName="Our Consultation Process"
      title="Step-by-Step Guidance"
    >
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
        {/* card  */}
        <FadeInLeftWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/Study Abroad Consultation/process/1.svg"
                alt="Initial Assessment"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Initial Assessment</h5>
            <p className="text-sm font-medium">
              We start by understanding your academic background, career goals,
              and preferences.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 1</h6>
            </div>
          </div>
        </FadeInLeftWithSlowBounce>
        {/* card  */}
        <FadeInRightWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="relative flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/Study Abroad Consultation/process/2.svg"
                alt="Initial Assessment"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">University Selection</h5>
            <p className="text-sm font-medium">
              We assist in selecting the best universities tailored to your
              goals.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 2</h6>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
        {/* card  */}
        <FadeInLeftWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/Study Abroad Consultation/process/3.svg"
                alt="Initial Assessment"
                height={30}
                width={30}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Application Assistance</h5>
            <p className="text-sm font-medium">
              We streamline your application process for a smooth and successful
              submission.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 3</h6>
            </div>
          </div>
        </FadeInLeftWithSlowBounce>
        {/* card  */}
        <FadeInRightWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/Study Abroad Consultation/process/4.svg"
                alt="Initial Assessment"
                height={30}
                width={30}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Visa Guidance</h5>
            <p className="text-sm font-medium">
              We guide you through the entire visa process for a successful
              outcome.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 4</h6>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
        {/* card  */}
        <FadeInUpWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/Study Abroad Consultation/process/5.svg"
                alt="Initial Assessment"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Pre-Departure Briefing</h5>
            <p className="text-sm font-medium">
              We provide essential information to prepare you for your new life
              abroad.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 5</h6>
            </div>
          </div>
        </FadeInUpWithSlowBounce>
      </div>
    </Section>
  );
};

export default OurConsultationProcess;
