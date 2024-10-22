import PageBanner from "@/components/common/PageBanner";
import TabSection from "@/components/pages/universities/university_details/TabsSection";
import TopSection from "@/components/pages/universities/university_details/TopSection";

const UniversityDetailsPage = () => {
  return (
    <main>
      <PageBanner PageName="Spiru haret University, Romania" />
      <TopSection />
      <TabSection />
    </main>
  );
};

export default UniversityDetailsPage;
