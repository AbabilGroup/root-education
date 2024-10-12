"use client";

import Section from "@/components/common/Section";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <Section sectionName="Testimonials" title="What Our Students Says">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
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

      {/* spacer  */}
      <div className="h-[50px]"></div>
    </Section>
  );
};

export default Testimonials;
