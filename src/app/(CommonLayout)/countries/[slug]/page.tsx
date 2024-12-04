import PageBanner from "@/components/common/PageBanner";
import AccordionSection from "@/components/pages/countries/country_details/AccordionSection";
import BestCities from "@/components/pages/countries/country_details/BestCities";
import FAQ from "@/components/pages/countries/country_details/FAQ";
import InstituteRepresent from "@/components/pages/countries/country_details/InstituteRepresent";
import TabsSection from "@/components/pages/countries/country_details/TabsSection";
import TopSection from "@/components/pages/countries/country_details/TopSection";
import { formatCountryRoute } from "@/lib/utils";
import { getCountryBySlug } from "@/services/getCountryBySlug";

type TCountryDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: TCountryDetailsPageProps) {
  const { slug } = params;

  return {
    title: `Root Education | ${formatCountryRoute(slug)}`,
  };
}

const CountryDetailsPage = async ({ params }: TCountryDetailsPageProps) => {
  const { slug } = params;

  const countryInfo = await getCountryBySlug(slug);
  console.log("🚀 ~ CountryDetailsPage ~ countryInfo:", countryInfo);

  return (
    <main>
      <PageBanner PageName={formatCountryRoute(slug)} />

      <TopSection countryInfo={countryInfo} />

      <TabsSection countryInfo={countryInfo} />

      <AccordionSection countryInfo={countryInfo} />

      <BestCities countryInfo={countryInfo} />

      <InstituteRepresent />

      <FAQ countryInfo={countryInfo} />
    </main>
  );
};

export default CountryDetailsPage;
