import PageBanner from "@/components/common/PageBanner";
import BestCountriesChosenByStudents from "@/components/pages/services/study_abroad_consultation/BestCountriesChosenByStudents";
import FAQ from "@/components/pages/services/study_abroad_consultation/FAQ";
import MainSection from "@/components/pages/services/study_abroad_consultation/MainSection";
import OurConsultationProcess from "@/components/pages/services/study_abroad_consultation/OurConsultationProcess";
import WhyChooseUs from "@/components/pages/services/study_abroad_consultation/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Study Abroad Consultation",
};

const StudyAbroadConsultationPage = () => {
  return (
    <main>
      <PageBanner
        PageName="Study Abroad Consultation"
        bannerBg="bg-page-banner-bg"
      />
      <MainSection />
      <WhyChooseUs />
      <OurConsultationProcess />
      <BestCountriesChosenByStudents />
      <FAQ />
    </main>
  );
};

export default StudyAbroadConsultationPage;
