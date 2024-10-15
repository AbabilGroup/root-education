import PageBanner from "@/components/common/PageBanner";
import FAQ from "@/components/pages/services/university_selection/FAQ";
import MainSection from "@/components/pages/services/university_selection/MainSection";
import ServiceBenefits from "@/components/pages/services/university_selection/ServiceBenefits";
import UniversitySelectionProcess from "@/components/pages/services/university_selection/UniversitySelectionProcess";
import WhyChooseUs from "@/components/pages/services/university_selection/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | University Selection",
};

const UniversitySelectionPage = () => {
  return (
    <main>
      <PageBanner
        PageName="University Selection"
        bannerBg="bg-page-banner-bg"
      />
      <MainSection />
      <UniversitySelectionProcess />
      <WhyChooseUs />
      <ServiceBenefits />
      <FAQ />
    </main>
  );
};

export default UniversitySelectionPage;
