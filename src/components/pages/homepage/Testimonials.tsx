import Section from "@/components/common/Section";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Section sectionName="Testimonials" title="What Our Students Says">
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3">
            <TestimonialCard />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </Section>
  );
};

export default Testimonials;
