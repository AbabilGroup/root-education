import AboutUs from "@/components/pages/homepage/AboutUs";
import Hero from "@/components/pages/homepage/Hero";
import OurPartnersUniversity from "@/components/pages/homepage/OurPartnersUniversity";
import OurServices from "@/components/pages/homepage/OurServices";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurPartnersUniversity />
    </main>
  );
};

export default HomePage;
