import PageBanner from "@/components/common/PageBanner";
import Discover from "@/components/pages/how_we_work/Discover";
import HowWeWork from "@/components/pages/how_we_work/HowWeWork";

const HowWeWorkPage = () => {
  return (
    <main className="pb-[100px]">
      <PageBanner PageName="How We Work" />
      <HowWeWork />
      <Discover />
    </main>
  );
};

export default HowWeWorkPage;
