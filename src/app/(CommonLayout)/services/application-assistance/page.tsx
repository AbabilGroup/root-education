import PageBanner from "@/components/common/PageBanner";
import FAQ from "@/components/pages/services/application_assistance/FAQ";
import MainSection from "@/components/pages/services/application_assistance/MainSection";
import ServicesIncluded from "@/components/pages/services/application_assistance/ServicesIncluded";
import WhyChooseUs from "@/components/pages/services/application_assistance/WhyChooseUs";

const ApplicationAssistancePage = () => {
  return (
    <main>
      <PageBanner PageName="Application Assistance" />
      <MainSection />
      <ServicesIncluded />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
};

export default ApplicationAssistancePage;
