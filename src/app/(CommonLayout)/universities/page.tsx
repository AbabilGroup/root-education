import PageBanner from "@/components/common/PageBanner";
import UniversitiesWeRepresent from "@/components/pages/universities/UniversitiesWeRepresent";
import { getAllUniversities } from "@/services/getAllUniversities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Universities",
};

type UniversitiesPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const UniversitiesPage = async ({ searchParams }: UniversitiesPageProps) => {
  const universityData = await getAllUniversities(searchParams);

  return (
    <main>
      <PageBanner PageName="Universities" />
      <UniversitiesWeRepresent universityData={universityData} />
    </main>
  );
};

export default UniversitiesPage;
