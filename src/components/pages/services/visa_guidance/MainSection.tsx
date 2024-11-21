import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <h2 className="text-center text-4xl font-semibold lg:text-left">
            Expert Visa Guidance for a Hassle-Free Journey
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Our Expert Visa Guidance service ensures a smooth and stress-free
            visa application process. From document preparation to interview
            coaching, we provide personalized support at every step. With our
            expertise, you can confidently navigate visa requirements and focus
            on your study abroad journey without worries. Let us handle the
            complexities for you!
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/consultation">
              <Button>Book Your Consultation</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[350px] w-full basis-full xl:basis-1/2">
          <Image
            className="object-contain object-center xl:object-right"
            src="/images/pages/services/visa_guidance/visa_guidance.svg"
            alt="Study Abroad Consultation"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default MainSection;
