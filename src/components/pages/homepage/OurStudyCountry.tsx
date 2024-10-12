import Section from "@/components/common/Section";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StudyCountryCard from "./StudyCountryCard";

const OurStudyCountry = () => {
  return (
    <Section
      sectionName="Our Study Country"
      title="Explore top global study destinations"
    >
      <div className="px-8">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
              <StudyCountryCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};

export default OurStudyCountry;
