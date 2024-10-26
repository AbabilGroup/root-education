"use client";

import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SiteButton from "@/components/ui/SiteButton";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              Scholarships & Financial Support
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left">
            Funding Your Dreams: Explore Scholarships & Financial Aid
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Unlock the door to global education with scholarships and financial
            aid tailored to support your academic journey. At Root Education, we
            connect you with funding opportunities, including merit-based
            scholarships, need-based grants, and financial aid programs. Our
            team provides personalized guidance, helping you secure the
            resources needed to turn your study abroad dreams into a financially
            viable reality.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <SiteButton to="/consultation">Book Your Consultation</SiteButton>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[600px] xl:basis-1/2">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                className="cursor-pointer object-contain object-center xl:object-right"
                src="/images/pages/services/scholarship_and_financial_aid/scholarship.svg"
                alt="University Selection"
                fill
              />
            </DialogTrigger>
            <DialogContent className="min-h-[70vh] max-w-[1000px] border border-primary bg-white">
              <div className="p-5">
                <ReactPlayer
                  playing
                  controls
                  style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    border: "1px solid #ddd",
                  }}
                  url="https://youtu.be/qC4sVo6STFM"
                />
              </div>
            </DialogContent>
          </Dialog>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default MainSection;
