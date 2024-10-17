import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const ScholarshipProcess = () => {
  return (
    <Section
      sectionName="Scholarship & Financial Aid Process"
      title="Our Step-by-Step Scholarship & Financial Aid Process"
    >
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {/* card  */}
        <FadeInLeftWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 01
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/1.svg"
                alt="Initial Consultation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Initial Consultation
            </h5>
            <p className="text-center text-sm font-medium">
              Meet with our advisors to discuss your academic goals, financial
              situation, and eligibility for scholarships and financial aid
              options.
            </p>
          </div>
        </FadeInLeftWithSlowBounce>

        {/* card  */}
        <FadeInDownWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 02
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/2.svg"
                alt="Shortlisting Universities"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Opportunity Matching
            </h5>
            <p className="text-center text-sm font-medium">
              We’ll conduct in-depth research to find scholarships, grants, and
              financial aid that best fit your profile and study destination.
            </p>
          </div>
        </FadeInDownWithSlowBounce>

        {/* card  */}
        <FadeInRightWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 03
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/3.svg"
                alt="Application Assistance"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Eligibility Review
            </h5>
            <p className="text-center text-sm font-medium">
              Our team helps assess your qualifications to ensure you meet the
              criteria for the scholarships and financial aid opportunities we
              recommend.
            </p>
          </div>
        </FadeInRightWithSlowBounce>

        {/* card  */}
        <FadeInLeftWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 04
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/4.svg"
                alt="Offer Acceptance"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Application Preparation
            </h5>
            <p className="text-center text-sm font-medium">
              Get expert assistance in preparing your applications, including
              gathering necessary documents, writing personal statements, and
              crafting scholarship essays.
            </p>
          </div>
        </FadeInLeftWithSlowBounce>

        {/* card  */}
        <FadeInUpWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 05
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/5.svg"
                alt="Initial Consultation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Submission & Follow-Up
            </h5>
            <p className="text-center text-sm font-medium">
              We guide you through the submission process and provide follow-up
              support to track the progress of your applications.
            </p>
          </div>
        </FadeInUpWithSlowBounce>

        {/* card  */}
        <FadeInRightWithSlowBounce className="relative rounded-xl border shadow-md">
          <div className="absolute right-0 top-[30px] flex w-[80px] items-center justify-center rounded-l-full bg-primary py-3 text-sm font-medium text-white">
            Step 06
          </div>
          <div className="m-6 space-y-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/pages/services/scholarship_and_financial_aid/process/6.svg"
                alt="Pre-Departure Preparation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">Ongoing Support</h5>
            <p className="text-center text-sm font-medium">
              Even after submitting your applications, we remain available for
              any questions, updates, or additional requirements from
              institutions.
            </p>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </Section>
  );
};

export default ScholarshipProcess;
