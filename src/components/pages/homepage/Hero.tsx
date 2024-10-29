import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SiteButton from "@/components/ui/SiteButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-home-hero-bg bg-cover bg-center bg-no-repeat pt-[100px] text-white xl:pt-0">
      <div className="container flex flex-col items-center justify-between gap-x-24 gap-y-[50px] xl:flex-row xl:gap-y-0">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <h1 className="text-center text-5xl font-bold xl:text-left xl:text-6xl">
            Start Your Global Learning Experience
          </h1>
          <p className="text-center text-sm font-medium xl:text-left">
            Embark on an unforgettable educational journey that spans
            continents. Discover new cultures, gain unique perspectives, and
            enhance your academic and personal growth. Join us and turn your
            study abroad dreams into reality, all with guidance and support
            every step of the way.
          </p>
          <div className="flex items-center justify-center xl:justify-start">
            <SiteButton to="/consultation">Free Consultation</SiteButton>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[550px] xl:basis-1/2">
          <Image
            className="object-contain object-bottom xl:object-right-bottom"
            src="/images/pages/home/hero_section/hero_img.svg"
            alt="Root Education"
            fill
          />
          <span className="absolute right-0 top-[200px] rounded-sm bg-white px-6 py-2 text-sm font-medium text-secondary">
            95% Visa Success Rate
          </span>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default Hero;
