import PageBanner from "@/components/common/PageBanner";
import TabSection from "@/components/pages/universities/university_details/TabsSection";
import TopSection from "@/components/pages/universities/university_details/TopSection";
import { formatCountryRoute } from "@/lib/utils";
import { getUniversityBySlug } from "@/services/getUniversityBySlug";

type TUniversityDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: TUniversityDetailsPageProps) {
  const { slug } = params;

  return {
    title: `Root Education | ${formatCountryRoute(slug)}`,
  };
}

const UniversityDetailsPage = async ({
  params,
}: TUniversityDetailsPageProps) => {
  const { slug } = params;

  const universityInfo = await getUniversityBySlug(slug);

  return (
    <main>
      <PageBanner PageName={formatCountryRoute(params.slug)} />
      <TopSection universityInfo={universityInfo} />
      <TabSection universityInfo={universityInfo} />
    </main>
  );
};

export default UniversityDetailsPage;
