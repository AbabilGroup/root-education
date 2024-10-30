import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import Section from "@/components/common/Section";
import { apiBaseUrl, port } from "@/secrets";
import { Fee } from "@/types/country";
import Image from "next/image";

const TuitionFees = ({ tuitionFees }: { tuitionFees: Fee[] }) => {
  return (
    <Section
      sectionName="Tuition Fees"
      title="Discover Romania’s Best Tuition Rates"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tuitionFees.map((tuitionFee) => (
          <FadeInLeftWithSlowBounce
            className="flex items-center justify-start gap-x-3 rounded-lg border border-b-8 border-b-primary p-4"
            key={tuitionFee.title}
          >
            <div>
              <Image
                src={`${apiBaseUrl}:${port}${tuitionFee.icon}`}
                height={60}
                width={60}
                alt={tuitionFee.title}
              />
            </div>
            <div className="space-y-1">
              <h5 className="text-xl font-semibold">{tuitionFee.title}</h5>
              <p className="text-sm font-medium">{tuitionFee.range}</p>
            </div>
          </FadeInLeftWithSlowBounce>
        ))}
      </div>
    </Section>
  );
};

export default TuitionFees;
