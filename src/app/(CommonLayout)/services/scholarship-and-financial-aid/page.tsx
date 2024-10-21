import PageBanner from "@/components/common/PageBanner";
import FAQ from "@/components/pages/services/scholarship_and_financial_aid/FAQ";
import MainSection from "@/components/pages/services/scholarship_and_financial_aid/MainSection";
import ScholarshipProcess from "@/components/pages/services/scholarship_and_financial_aid/ScholarshipProcess";
import ServiceBenefits from "@/components/pages/services/scholarship_and_financial_aid/ServiceBenefits";
import WhyChooseUs from "@/components/pages/services/scholarship_and_financial_aid/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Scholarship and Financial Aid",
};

const ScholarshipAndFinancialAidPage = () => {
  return (
    <main>
      <PageBanner PageName="Scholarship & Financial Aid" />
      <MainSection />
      <ScholarshipProcess />
      <WhyChooseUs />
      <ServiceBenefits />
      <FAQ />
    </main>
  );
};

export default ScholarshipAndFinancialAidPage;
