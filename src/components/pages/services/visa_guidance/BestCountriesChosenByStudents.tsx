import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EuropeStudyCountryCard from "./EuropeStudyCountryCard";
import { getAllCountries } from "@/services/getAllCountries";
import { Study_Country } from "@/types/country";

const BestCountriesChosenByStudents = async () => {
  const countries = await getAllCountries();

  return (
    <Section
      sectionName="Best Countries Chosen by students"
      title="Best Countries for Studying in Europe"
    >
      <FadeInUpWithSlowBounce className="container px-20">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {countries.map((country: Study_Country) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/4"
                key={country.id}
              >
                <EuropeStudyCountryCard
                  imageUrl={country.photo ? (country.photo as string) : ""}
                  name={country.country}
                  slug={country.route_slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </FadeInUpWithSlowBounce>
    </Section>
  );
};

export default BestCountriesChosenByStudents;
