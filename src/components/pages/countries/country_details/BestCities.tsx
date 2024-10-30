import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import { Root } from "@/types/country";
import Image from "next/image";

const BestCities = ({ countryInfo }: { countryInfo: Root }) => {
  return (
    <Section
      sectionName="Best Cities Choose by students"
      title={`Best Cities for Studying ${countryInfo.country}`}
    >
      <div className="container">
        <div className="flex items-center justify-center gap-x-10">
          {countryInfo.city.map((city) => (
            <FadeInUpWithSlowBounce className="space-y-4" key={city.id}>
              <div className="mx-auto size-[150px] rounded-full bg-white p-1">
                <div className="relative mx-auto min-h-full">
                  <Image
                    className="rounded-full object-contain object-center"
                    src={`http://103.17.37.8:8004${city.logo}`}
                    alt={city.name}
                    fill
                  />
                </div>
              </div>
              <h3 className="text-center text-2xl font-bold">{city.name}</h3>
            </FadeInUpWithSlowBounce>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BestCities;
