import PageBanner from "@/components/common/PageBanner";
import AccordionSection from "@/components/pages/countries/country_details/AccordionSection";
import BestCities from "@/components/pages/countries/country_details/BestCities";
import FAQ from "@/components/pages/countries/country_details/FAQ";
import InstituteRepresent from "@/components/pages/countries/country_details/InstituteRepresent";
import TabsSection from "@/components/pages/countries/country_details/TabsSection";
import TopSection from "@/components/pages/countries/country_details/TopSeciton";
import { formatCountryRoute } from "@/lib/utils";

type TCountryDetailsPageProps = {
  params: { country: string };
};

export async function generateMetadata({ params }: TCountryDetailsPageProps) {
  const { country } = params;

  return {
    title: `Root Education | ${formatCountryRoute(country)}`,
  };
}

const CountryDetailsPage = ({ params }: TCountryDetailsPageProps) => {
  return (
    <main>
      <PageBanner PageName={formatCountryRoute(params.country)} />

      <TopSection />

      <TabsSection />

      <AccordionSection />

      <BestCities />

      <InstituteRepresent />

      <FAQ />
    </main>
  );
};

export default CountryDetailsPage;
