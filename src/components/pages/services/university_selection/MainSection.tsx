"use client";

import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SiteButton from "@/components/ui/SiteButton";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ModalContent from "@/components/common/ModalContent";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              University Selection Experts
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left">
            Expert University Selection for Your Global Education
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Root Education specializes in guiding students through the
            university selection process, offering expert advice tailored to
            your academic goals. We provide personalized recommendations and
            help you navigate the application process, ensuring you choose the
            best university for your global education journey. Let us help you
            make informed decisions for a successful study abroad experience.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Button to="/consultation">Book Your Consultation</SiteButton>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[600px] xl:basis-1/2">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                className="cursor-pointer object-contain object-center xl:object-right"
                src="/images/pages/services/university_selection/main_section/university_selection.svg"
                alt="University Selection"
                fill
              />
            </DialogTrigger>

            <ModalContent />
          </Dialog>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default MainSection;
