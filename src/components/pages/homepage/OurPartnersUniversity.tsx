import Section from "@/components/common/Section";
import UniversityCard from "@/components/common/UniversityCard";
import Button from "@/components/ui/Button";

const OurPartnersUniversity = () => {
  return (
    <Section
      sectionName="Our Partners University"
      title="World-Class Educational Collaborations"
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* card  */}
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button>View All Universities</Button>
      </div>
    </Section>
  );
};

export default OurPartnersUniversity;
