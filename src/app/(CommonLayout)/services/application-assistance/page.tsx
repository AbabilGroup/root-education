import PageBanner from "@/components/common/PageBanner";
import ApplicationAssistanceProcess from "@/components/pages/services/application_assistance/ApplicationAssistanceProcess";
import FAQ from "@/components/pages/services/application_assistance/FAQ";
import MainSection from "@/components/pages/services/application_assistance/MainSection";
import ServicesIncluded from "@/components/pages/services/application_assistance/ServicesIncluded";
import WhyChooseUs from "@/components/pages/services/application_assistance/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Application Assistance",
};

const ApplicationAssistancePage = () => {
  return (
    <main>
      <PageBanner PageName="Application Assistance" />
      <MainSection />
      <ServicesIncluded />
      <WhyChooseUs />
      <ApplicationAssistanceProcess />
      <FAQ />
    </main>
  );
};

export default ApplicationAssistancePage;
