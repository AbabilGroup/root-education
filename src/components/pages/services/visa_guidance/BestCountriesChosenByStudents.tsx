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

const BestCountriesChosenByStudents = () => {
  const EuropeStudyCountries = [
    {
      name: "Romania",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/romania.png",
    },
    {
      name: "Malta",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/malta.png",
    },
    {
      name: "Hungary",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/hungary.png",
    },
    {
      name: "Lithuania",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/lithuania.png",
    },
    {
      name: "Latvia",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/latvia.png",
    },
    {
      name: "Bulgaria",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/bulgaria.png",
    },
    {
      name: "Georgia",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/georgia.png",
    },
    {
      name: "Russia",
      photo:
        "/images/pages/services/Study Abroad Consultation/study_europe/russia.png",
    },
  ];

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
            {EuropeStudyCountries.map((country) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/4"
                key={country.name}
              >
                <EuropeStudyCountryCard
                  imageUrl={country.photo}
                  name={country.name}
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
