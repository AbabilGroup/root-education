import Section from "@/components/common/Section";
import ServicesIncludedCard from "../../services/pre_departure_briefing/ServicesIncludedCard";
import { List } from "@/types";
import Image from "next/image";
import { apiBaseUrl, port } from "@/secrets";

const LivingCosts = ({ livingCosts }: { livingCosts: List[] }) => {
  return (
    <Section
      sectionName="Living Costs"
      title="Best Guide to Student Living Costs"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {livingCosts.map((livingCost) => (
          <ServicesIncludedCard
            icon={
              <Image
                src={`${apiBaseUrl}:${port}${livingCost.icon}`}
                height={40}
                width={40}
                alt={livingCost.title}
              />
            }
            title={livingCost.title}
            description={livingCost.content}
            key={livingCost.title}
          />
        ))}
      </div>
    </Section>
  );
};

export default LivingCosts;
