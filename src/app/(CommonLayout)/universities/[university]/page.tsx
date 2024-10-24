import PageBanner from "@/components/common/PageBanner";
import TabSection from "@/components/pages/universities/university_details/TabsSection";
import TopSection from "@/components/pages/universities/university_details/TopSection";
import { formatCountryRoute } from "@/lib/utils";

type TUniversityDetailsPageProps = {
  params: { university: string };
};

export async function generateMetadata({
  params,
}: TUniversityDetailsPageProps) {
  const { university } = params;

  return {
    title: `Root Education | ${formatCountryRoute(university)}`,
  };
}

const UniversityDetailsPage = ({ params }: TUniversityDetailsPageProps) => {
  return (
    <main>
      <PageBanner PageName={formatCountryRoute(params.university)} />
      <TopSection />
      <TabSection />
    </main>
  );
};

export default UniversityDetailsPage;
