import Section from "@/components/common/Section";
import ServicesIncludedCard from "./ServicesIncludedCard";

const ServicesIncluded = () => {
  return (
    <Section
      sectionName="Services Included"
      title="Our Application Services Overview"
    >
      <div className="container grid gap-x-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServicesIncludedCard />
        <ServicesIncludedCard />
        <ServicesIncludedCard />
        <ServicesIncludedCard />
        <ServicesIncludedCard />
        <ServicesIncludedCard />
      </div>
    </Section>
  );
};

export default ServicesIncluded;
