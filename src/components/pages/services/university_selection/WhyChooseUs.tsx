import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SiteButton from "@/components/ui/SiteButton";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[600px] xl:basis-1/2">
          <Image
            className="cursor-pointer object-contain object-center xl:object-right"
            src="/images/pages/services/university_selection/why_choose_us/why_choose_us.svg"
            alt="University Selection"
            fill
          />
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-center text-3xl font-bold lg:text-left">
            Why Choose Our University Selection Service?
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Choose our University Selection Service for personalized guidance,
            expert support, extensive global partnerships, scholarship
            assistance, and comprehensive resources to help you make informed
            decisions for your successful study abroad journey.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-6 xl:grid-cols-2">
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/university_selection/why_choose_us/1.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full">
                <h6 className="text-xl font-medium">Comprehensive Research</h6>
                <p className="text-sm font-medium">
                  In-depth analysis and support for informed university
                  selection decisions.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/university_selection/why_choose_us/2.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full">
                <h6 className="text-xl font-medium">Scholarship Assistance</h6>
                <p className="text-sm font-medium">
                  Expert guidance in identifying and applying for available
                  scholarships.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/university_selection/why_choose_us/3.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full">
                <h6 className="text-xl font-medium">Global Connections</h6>
                <p className="text-sm font-medium">
                  Access to a vast network of universities and alumni worldwide.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/university_selection/why_choose_us/4.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full">
                <h6 className="text-xl font-medium">
                  Support Beyond Selection
                </h6>
                <p className="text-sm font-medium">
                  Support with visas, housing, and travel arrangements after
                  selection.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <SiteButton to="/consultation">Consultation</SiteButton>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChooseUs;
