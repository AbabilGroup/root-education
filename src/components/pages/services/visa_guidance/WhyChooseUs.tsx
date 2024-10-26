import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <Section
      sectionName="Why Choose Us"
      title="Why Choose Our Visa Guidance Services?"
    >
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-20 gap-y-10 px-6 lg:flex-row">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/1.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">Personalized Support</h5>
              <p className="text-sm font-medium">
                Our personalized support ensures tailored guidance for your
                unique visa needs throughout the application process.
              </p>
            </div>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInDownWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/2.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">Experienced Consultants</h5>
              <p className="text-sm font-medium">
                Our experienced consultants provide expert knowledge of visa
                regulations, ensuring a smooth application process.
              </p>
            </div>
          </FadeInDownWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/3.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">Complete Preparation</h5>
              <p className="text-sm font-medium">
                We assist with every detail, from document gathering to
                interview coaching, ensuring thorough preparation.
              </p>
            </div>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/4.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">Stress-Free Process</h5>
              <p className="text-sm font-medium">
                We manage the complexities of visa applications, allowing you to
                focus on your study abroad journey.
              </p>
            </div>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/5.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">Timely Updates</h5>
              <p className="text-sm font-medium">
                Receive regular updates on your visa application status, keeping
                you informed every step of the way.
              </p>
            </div>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md min-h-[165px]">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/visa_guidance/why_choose_us/6.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full space-y-3">
              <h5 className="text-xl font-medium">High Success Rate</h5>
              <p className="text-sm font-medium">
                Our proven track record ensures a high success rate in securing
                student visas for destinations.
              </p>
            </div>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
