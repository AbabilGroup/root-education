import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const UniversitySelectionProcess = () => {
  return (
    <Section
      sectionName="University Selection Process"
      title="Our Step-by-Step University
 Selection Process"
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
                src="/images/pages/services/university_selection/process/1.svg"
                alt="Initial Consultation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Initial Consultation
            </h5>
            <p className="text-center text-sm font-medium">
              Personalized assessment to understand student goals, preferences,
              and academic background for tailored university recommendations.
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
                src="/images/pages/services/university_selection/process/2.svg"
                alt="Shortlisting Universities"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Shortlisting Universities
            </h5>
            <p className="text-center text-sm font-medium">
              Customized selection of universities aligned with student
              aspirations, financial considerations, and academic interests for
              optimal fit.
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
                src="/images/pages/services/university_selection/process/3.svg"
                alt="Application Assistance"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Application Assistance
            </h5>
            <p className="text-center text-sm font-medium">
              Comprehensive support in preparing applications, including
              document reviews, personal statements, and submission guidance.
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
                src="/images/pages/services/university_selection/process/4.svg"
                alt="Offer Acceptance"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Offer Acceptance
            </h5>
            <p className="text-center text-sm font-medium">
              Guidance in analyzing university offers, understanding conditions,
              and making informed acceptance decisions for students.
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
                src="/images/pages/services/university_selection/process/5.svg"
                alt="Initial Consultation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Final Decision Support
            </h5>
            <p className="text-center text-sm font-medium">
              Assistance in evaluating options and making confident choices for
              the best-fit university experience.
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
                src="/images/pages/services/university_selection/process/6.svg"
                alt="Pre-Departure Preparation"
                height={60}
                width={60}
              />
            </div>
            <h5 className="text-center text-xl font-medium">
              Pre-Departure Preparation
            </h5>
            <p className="text-center text-sm font-medium">
              Comprehensive assistance with visa applications, accommodation
              arrangements, and travel planning for a smooth transition.
            </p>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </Section>
  );
};

export default UniversitySelectionProcess;
