import PageBanner from "@/components/common/PageBanner";
import BestCountriesChosenByStudents from "@/components/pages/services/Study Abroad Consultation/BestCountriesChosenByStudents";
import FAQ from "@/components/pages/services/Study Abroad Consultation/FAQ";
import MainSection from "@/components/pages/services/Study Abroad Consultation/MainSection";
import OurConsultationProcess from "@/components/pages/services/Study Abroad Consultation/OurConsultationProcess";
import WhyChooseUs from "@/components/pages/services/Study Abroad Consultation/WhyChooseUs";

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
