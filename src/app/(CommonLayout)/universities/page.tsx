import PageBanner from "@/components/common/PageBanner";
import UniversitiesWeRepresent from "@/components/pages/universities/UniversitiesWeRepresent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Universities",
};

const UniversitiesPage = () => {
  return (
    <main>
      <PageBanner PageName="Universities" />
      <UniversitiesWeRepresent />
    </main>
  );
};

export default UniversitiesPage;
