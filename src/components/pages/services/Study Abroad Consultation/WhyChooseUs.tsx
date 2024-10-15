import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <Section
      sectionName="Why Choose Us"
      title="Why Choose Our Consultation Services?"
    >
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-20 gap-y-10 px-6 lg:flex-row">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/Study Abroad Consultation/why_choose_us/1.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full">
              <h5 className="text-xl font-medium">Expert Guidance</h5>
              <p className="text-sm font-medium">
                Our experienced consultants offer in-depth knowledge of
                international education systems, helping you make informed
                decisions.
              </p>
            </div>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/Study Abroad Consultation/why_choose_us/2.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full">
              <h5 className="text-xl font-medium">Global Partnerships</h5>
              <p className="text-sm font-medium">
                We partner with top universities worldwide, giving you access to
                prestigious programs and global educational opportunities.
              </p>
            </div>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="inline-flex max-w-[350px] items-center gap-x-4 rounded-xl border border-r-8 border-r-primary py-5 pr-4 shadow-md">
            <div className="-ml-8 flex size-16 basis-auto items-center justify-center rounded-full border-4 border-dotted border-primary bg-white p-3">
              <Image
                src="/images/pages/services/Study Abroad Consultation/why_choose_us/3.svg"
                alt="Expert Guidance"
                height={30}
                width={30}
              />
            </div>
            <div className="basis-full">
              <h5 className="text-xl font-medium">End-to-End Support</h5>
              <p className="text-sm font-medium">
                We guide you through every step of studying abroad, from
                application and visa processes to settling in and adjusting
                smoothly.
              </p>
            </div>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
