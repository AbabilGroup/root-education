import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UniversityLogoCard from "./UniversityLogoCard";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";

const OurPartnersUniversities = () => {
  return (
    <Section
      sectionName="Our Partners Universities"
      title="Featured Universities in Our Partnerships"
    >
      <FadeInUpWithSlowBounce className="container px-24">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="flex basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/6">
              <UniversityLogoCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </FadeInUpWithSlowBounce>
    </Section>
  );
};

export default OurPartnersUniversities;
