import Section from "@/components/common/Section";
import UniversityCard from "@/components/common/UniversityCard";
import { Button } from "@/components/ui/Button";
import { getAllUniversities } from "@/services/getAllUniversities";
import { University } from "@/types/university";
import Link from "next/link";

const OurPartnersUniversity = async () => {
  const universities = await getAllUniversities();

  return (
    <Section
      sectionName="Our Partners University"
      title="World-Class Educational Collaborations"
    >
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {universities.map((university: University) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/universities">
          <Button>View All Universities</Button>
        </Link>
      </div>
    </Section>
  );
};

export default OurPartnersUniversity;
