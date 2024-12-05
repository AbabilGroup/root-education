import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import { University } from "@/types/university";
import Image from "next/image";

const InstituteRepresent = ({
  partnerUniversities,
}: {
  partnerUniversities: University[];
}) => {
  return (
    <Section
      sectionName="Institute we represent for Countries"
      title="Leading Institutions We Represent Globally"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6">
          {partnerUniversities.map((university) => (
            <FadeInUpWithSlowBounce
              className="flex w-[500px] min-h-[100px] items-center justify-start gap-x-4 rounded-full border px-4 py-2 shadow-sm"
              key={university.id}
            >
              <Image
                className="rounded-full"
                src={university.logo as string}
                alt={university.name}
                height={70}
                width={70}
              />

              <div className="">
                <h5 className="text-lg font-medium">{university.name}</h5>
                <h6 className="text-sm font-medium">
                  {university.short_info.country}
                </h6>
              </div>
            </FadeInUpWithSlowBounce>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default InstituteRepresent;
