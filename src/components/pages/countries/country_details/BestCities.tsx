import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import Image from "next/image";

const BestCities = () => {
  return (
    <Section
      sectionName="Best Cities Choose by students"
      title="Best Cities for Studying Romania"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-4">
            <div className="mx-auto size-[150px] rounded-full border-2 border-dotted border-primary bg-white p-1">
              <div className="relative mx-auto min-h-full">
                <Image
                  className="rounded-full object-contain object-center"
                  src="/images/city_img.svg"
                  alt="City"
                  fill
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold">Bucharest</h3>
          </FadeInUpWithSlowBounce>
        </div>
      </div>
    </Section>
  );
};

export default BestCities;
