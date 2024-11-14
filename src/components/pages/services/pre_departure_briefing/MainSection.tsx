"use client";

import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ModalContent from "@/components/common/ModalContent";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              Pre-departure Travel Guide
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left">
            Complete Pre-departure Guidance for Study Abroad
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Our Complete Pre-departure Guidance for Study Abroad service is
            designed to help you feel confident and well-prepared before leaving
            for your international studies. We cover everything from important
            travel documents, visa and health requirements to cultural insights,
            packing tips, and financial advice. Our comprehensive support
            ensures a smooth transition, so you can focus on making the most of
            your study abroad experience from day one. Let us guide you every
            step of the way!
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/consultation">
              <Button>Book Your Consultation</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[460px] xl:basis-1/2">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                className="cursor-pointer object-contain object-center xl:object-right"
                src="/images/pages/services/pre_departure_briefing/pre_departure_briefing.svg"
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
