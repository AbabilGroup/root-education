import PageBanner from "@/components/common/PageBanner";
import BestCountriesChosenByStudents from "@/components/pages/services/visa_guidance/BestCountriesChosenByStudents";
import FAQ from "@/components/pages/services/visa_guidance/FAQ";
import MainSection from "@/components/pages/services/visa_guidance/MainSection";
import VisaGuidanceProcess from "@/components/pages/services/visa_guidance/VisaGuidanceProcess";
import WhyChooseUs from "@/components/pages/services/visa_guidance/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Visa Guidance",
};

const VisaGuidancePage = () => {
  return (
    <main>
      <PageBanner PageName="Visa Guidance" />
      <MainSection />
      <WhyChooseUs />
      <VisaGuidanceProcess />
      <BestCountriesChosenByStudents />
      <FAQ />
    </main>
  );
};

export default VisaGuidancePage;
