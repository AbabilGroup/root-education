import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UniversityLogoCard from "./UniversityLogoCard";

const OurPartnersUniversities = () => {
  return (
    <Section
      sectionName="Our Partners Universities"
      title="Featured Universities in Our Partnerships"
    >
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/5">
              <UniversityLogoCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};

export default OurPartnersUniversities;
