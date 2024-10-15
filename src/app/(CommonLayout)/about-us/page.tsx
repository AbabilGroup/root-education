import PageBanner from "@/components/common/PageBanner";
import Testimonials from "@/components/common/Testimonials";
import AboutUs from "@/components/pages/about_us/AboutUs";
import GetInTouch from "@/components/pages/about_us/GetInTouch";
import OurPartnersUniversities from "@/components/pages/about_us/OurPartnersUniversities";
import OurTeamMembers from "@/components/pages/about_us/OurTeamMembers";
import WhyChooseUs from "@/components/pages/about_us/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | About Us",
};

const AboutUsPage = () => {
  return (
    <main>
      <PageBanner PageName="About Us" bannerBg="bg-about-us-banner-bg" />
      <AboutUs />
      <OurTeamMembers />
      <WhyChooseUs />
      <OurPartnersUniversities />
      <Testimonials />
      <GetInTouch />
    </main>
  );
};

export default AboutUsPage;
