import AboutUs from "@/components/pages/homepage/AboutUs";
import Hero from "@/components/pages/homepage/Hero";
import OurPartnersUniversity from "@/components/pages/homepage/OurPartnersUniversity";
import OurServices from "@/components/pages/homepage/OurServices";
import OurStudyCountry from "@/components/pages/homepage/OurStudyCountry";
import Testimonials from "@/components/pages/homepage/Testimonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurPartnersUniversity />
      <OurStudyCountry />
      <Testimonials />
    </main>
  );
};

export default HomePage;
