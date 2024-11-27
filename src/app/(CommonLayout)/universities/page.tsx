import PageBanner from "@/components/common/PageBanner";
import UniversitiesWeRepresent from "@/components/pages/universities/UniversitiesWeRepresent";
import { getAllUniversities } from "@/services/getAllUniversities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Universities",
};

const UniversitiesPage = async () => {
  const universityData = await getAllUniversities();

  return (
    <main>
      <PageBanner PageName="Universities" />
      <UniversitiesWeRepresent universityData={universityData} />
    </main>
  );
};

export default UniversitiesPage;
