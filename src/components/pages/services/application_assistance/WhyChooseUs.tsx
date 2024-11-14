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
            src="/images/pages/services/application_assistance/why_choose_us/why_choose_us.svg"
            alt="Application Assistance"
            fill
          />
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-left">
            Why Choose Our Application Assistance Service?
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Choose our Application Assistance Service for expert guidance,
            personalized support, and streamlined processes, ensuring you meet
            deadlines and submit competitive applications to your desired
            universities globally.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-6 xl:grid-cols-2">
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/application_assistance/why_choose_us/1.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Expert Guidance</h6>
                <p className="text-sm font-medium">
                  Tailored advice from expert counselors to boost your
                  application success.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/application_assistance/why_choose_us/2.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Comprehensive Support</h6>
                <p className="text-sm font-medium">
                  Full support for every detail, ensuring a smooth application
                  process.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/application_assistance/why_choose_us/3.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Personalized Approach</h6>
                <p className="text-sm font-medium">
                  Individualized strategies tailored to match your unique
                  academic profile.
                </p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="basis-auto">
                <Image
                  src="/images/pages/services/application_assistance/why_choose_us/4.svg"
                  alt="Comprehensive Research"
                  height={50}
                  width={50}
                />
              </div>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">
                  Strong University Network
                </h6>
                <p className="text-sm font-medium">
                  Connections with top universities for exclusive opportunities
                  and insights.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <Button to="/consultation">Consultation</SiteButton>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChooseUs;
