import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Image from "next/image";

const Discover = () => {
  return (
    <section>
      <div className="container space-y-10">
        <h2 className="mx-auto text-center text-4xl font-semibold text-secondary lg:text-4xl">
          Discover the Edge: Our Unique Advantages
        </h2>

        <div className="space-y-24">
          <div className="flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
            <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
              <h2 className="text-3xl font-semibold text-secondary">
                Benefits of Choosing Us
              </h2>
              <p className="text-sm font-medium">
                Choose us for personalized guidance, expert insights, and
                seamless support on your study abroad journey. We make your
                dream education a reality, every step of the way.
              </p>
              <div className="space-y-1">
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Expert team with years of experience in student consulting.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Tailored support for your entire educational pathway.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Comprehensive services, including scholarship guidance and
                  interview prep.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Proven track record of client success stories.
                </p>
              </div>
            </FadeInLeftWithSlowBounce>
            <FadeInRightWithSlowBounce className="relative min-h-[250px] w-full basis-full lg:min-h-[350px] xl:basis-1/2">
              <Image
                className="object-contain object-center xl:object-right"
                src="/images/pages/how_we_work/benefits.svg"
                alt="Benefits of Choosing Us"
                fill
              />
            </FadeInRightWithSlowBounce>
          </div>
          <div className="flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row-reverse">
            <FadeInRightWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
              <h2 className="text-3xl font-semibold text-secondary">
                Unique Services We Offer
              </h2>
              <p className="text-sm font-medium">
                We offer tailored counseling, exclusive university partnerships,
                and step-by-step visa assistance, ensuring a smooth and
                successful study abroad experience from start to finish.
              </p>
              <div className="space-y-1">
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Personalized academic advising to match your career goals.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Assistance with university and course selection.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Guidance on application preparation and submission.
                </p>
                <p className="flex items-center justify-start text-sm font-medium">
                  <Image
                    src="/icons/list_icon.svg"
                    alt="List"
                    height={24}
                    width={24}
                  />
                  Onboarding sessions to prepare for your study abroad journey.
                </p>
              </div>
            </FadeInRightWithSlowBounce>
            <FadeInLeftWithSlowBounce className="relative min-h-[250px] w-full basis-full lg:min-h-[350px] xl:basis-1/2">
              <Image
                className="object-contain object-center xl:object-left"
                src="/images/pages/how_we_work/benefits.svg"
                alt="Benefits of Choosing Us"
                fill
              />
            </FadeInLeftWithSlowBounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
