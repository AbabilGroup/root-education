import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const VisaGuidanceProcess = () => {
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
                src="/images/pages/services/visa_guidance/process/1.svg"
                alt="Initial Assessment"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Initial Consultation</h5>
            <p className="text-sm font-medium">
              Discuss your study plans and visa requirements with our expert
              consultants.
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
                src="/images/pages/services/visa_guidance/process/2.svg"
                alt="Initial Assessment"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Document Preparation</h5>
            <p className="text-sm font-medium">
              Receive a checklist and assistance in gathering all necessary visa
              documents.
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
                src="/images/pages/services/visa_guidance/process/3.svg"
                alt="Initial Assessment"
                height={30}
                width={30}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Application Assistance</h5>
            <p className="text-sm font-medium">
              Get support in accurately completing your visa application forms
              with ease.
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
                src="/images/pages/services/visa_guidance/process/4.svg"
                alt="Initial Assessment"
                height={30}
                width={30}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Interview Preparation</h5>
            <p className="text-sm font-medium">
              Practice with mock interviews and receive essential tips for
              successful preparation.
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
                src="/images/pages/services/visa_guidance/process/5.svg"
                alt="Initial Assessment"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Submission & Tracking</h5>
            <p className="text-sm font-medium">
              Submit your application and receive regular updates on its status
              and progress.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 5</h6>
            </div>
          </div>
        </FadeInUpWithSlowBounce>
        {/* card  */}
        <FadeInUpWithSlowBounce className="inline-flex max-w-[500px] items-center justify-between gap-x-6 rounded-full border p-2 shadow-md">
          <div className="rounded-full border p-2">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-primary p-2">
              <Image
                src="/images/pages/services/visa_guidance/process/6.svg"
                alt="Initial Assessment"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h5 className="text-xl font-medium">Post-Approval Support</h5>
            <p className="text-sm font-medium">
              Receive guidance on next steps and travel preparations after visa
              approval.
            </p>
          </div>
          <div className="rounded-full border p-2">
            <div className="flex size-[65px] items-center justify-center rounded-full bg-primary p-2">
              <h6 className="text-sm font-medium text-white">Step 6</h6>
            </div>
          </div>
        </FadeInUpWithSlowBounce>
      </div>
    </Section>
  );
};

export default VisaGuidanceProcess;
