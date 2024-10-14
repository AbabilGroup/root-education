import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Testimonials from "@/components/common/Testimonials";
import AboutUs from "@/components/pages/about_us/AboutUs";
import GetInTouch from "@/components/pages/about_us/GetInTouch";
import OurPartnersUniversities from "@/components/pages/about_us/OurPartnersUniversities";
import OurTeamMembers from "@/components/pages/about_us/OurTeamMembers";
import WhyChooseUs from "@/components/pages/about_us/WhyChooseUs";

const AboutUsPage = () => {
  return (
    <main>
      {/* banner  */}
      <section className="space-y-6 bg-about-us-banner-bg bg-cover bg-center bg-no-repeat py-[70px] text-center text-white">
        <FadeInUpWithSlowBounce className="space-y-4">
          <h1 className="text-3xl font-semibold lg:text-4xl">About Us</h1>
          <Breadcrumbs />
        </FadeInUpWithSlowBounce>
      </section>

      {/* sections  */}

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
