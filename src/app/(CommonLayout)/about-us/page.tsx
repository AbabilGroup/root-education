import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AboutUs from "@/components/pages/about_us/AboutUs";

const AboutUsPage = () => {
  return (
    <main>
      {/* banner  */}
      <section className="bg-about-us-banner-bg space-y-6 bg-cover bg-center bg-no-repeat py-[50px] text-center text-white">
        <FadeInUpWithSlowBounce className="space-y-4">
          <h1 className="text-3xl font-semibold lg:text-4xl">About Us</h1>
          <Breadcrumbs />
        </FadeInUpWithSlowBounce>
      </section>

      {/* sections  */}

      <AboutUs />
    </main>
  );
};

export default AboutUsPage;
