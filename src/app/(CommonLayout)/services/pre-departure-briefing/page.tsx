import PageBanner from "@/components/common/PageBanner";
import DepartureProcess from "@/components/pages/services/pre_departure_briefing/DepartureProcess";
import FAQ from "@/components/pages/services/pre_departure_briefing/FAQ";
import MainSection from "@/components/pages/services/pre_departure_briefing/MainSection";
import ServicesIncluded from "@/components/pages/services/pre_departure_briefing/ServicesIncluded";
import WhyChooseUs from "@/components/pages/services/pre_departure_briefing/WhyChooseUs";

const PreDepartureBriefingPage = () => {
  return (
    <main>
      <PageBanner PageName="Pre-departure Briefing" />
      <MainSection />
      <ServicesIncluded />
      <WhyChooseUs />
      <DepartureProcess />
      <FAQ />
    </main>
  );
};

export default PreDepartureBriefingPage;
