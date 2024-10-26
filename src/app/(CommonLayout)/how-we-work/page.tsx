import PageBanner from "@/components/common/PageBanner";
import Discover from "@/components/pages/how_we_work/Discover";
import HowWeWork from "@/components/pages/how_we_work/HowWeWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | How We Work",
};

const HowWeWorkPage = () => {
  return (
    <main className="pb-[100px]">
      <PageBanner PageName="How We Work" />

      {/* spacer  */}
      <div className="h-[50px]"></div>
      <HowWeWork />
      {/* spacer  */}
      <div className="h-[50px]"></div>
      <Discover />
    </main>
  );
};

export default HowWeWorkPage;
