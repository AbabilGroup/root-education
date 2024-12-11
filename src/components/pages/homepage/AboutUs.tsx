"use client";

import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SectionName from "@/components/ui/SectionName";
import Image from "next/image";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import CountUp from "react-countup";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { IoPlayCircle } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { Fragment, useState } from "react";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  // function open() {
  //   setIsOpen(true);
  // }

  // function close() {
  //   setIsOpen(false);
  // }

  return (
    <section className="relative pb-[50px]">
      <div className="container">
        <div className="mx-auto -mt-[73px] grid max-w-5xl grid-cols-1 divide-y-[1px] divide-primary rounded-lg border-l-8 border-r-8 border-l-primary border-r-primary bg-white px-20 py-8 shadow sm:divide-x-0 sm:divide-y-0 md:grid-cols-2 xl:grid-cols-4 xl:divide-x-[1px] xl:divide-y-0 xl:px-0">
          <div className="space-y-2 px-10 py-3 text-center">
            <FadeInDownWithSlowBounce>
              <h4 className="text-3xl font-bold text-primary">
                <CountUp duration={5} end={1000} />+
              </h4>
              <p className="text-sm font-medium">Enrolled Students</p>
            </FadeInDownWithSlowBounce>
          </div>
          <div className="space-y-2 px-10 py-3 text-center">
            <FadeInDownWithSlowBounce>
              <h4 className="text-3xl font-bold text-primary">
                <CountUp duration={5} end={6} />+
              </h4>
              <p className="text-sm font-medium">Branches Worldwide</p>
            </FadeInDownWithSlowBounce>
          </div>
          <div className="space-y-2 px-10 py-3 text-center">
            <FadeInDownWithSlowBounce>
              <h4 className="text-3xl font-bold text-primary">
                <CountUp duration={5} end={36} />+
              </h4>
              <p className="text-sm font-medium">Partnered University</p>
            </FadeInDownWithSlowBounce>
          </div>
          <div className="space-y-2 px-10 py-3 text-center">
            <FadeInDownWithSlowBounce>
              <h4 className="text-3xl font-bold text-primary">
                <CountUp duration={5} end={13} /> Years
              </h4>
              <p className="text-sm font-medium">of Experience</p>
            </FadeInDownWithSlowBounce>
          </div>
        </div>
      </div>

      {/* row  */}
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 pt-[80px] lg:gap-y-0 xl:flex-row">
        {/* column */}
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <SectionName name="About Us" />
          <h2 className="text-4xl font-bold">
            Learn & Grow Your Skills <br /> from Global study abroad
          </h2>
          <p className="text-sm font-medium">
            Welcome to Root Education, your gateway to transformative study
            abroad experiences. We specialize in connecting students with global
            learning opportunities that enrich their academic journey and
            broaden cultural horizons. Our dedicated team guides students
            through choosing programs and navigating applications, ensuring each
            finds their ideal educational path.
          </p>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="#F37329"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h6>100% Customer Satisfaction</h6>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="#F37329"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h6>Expert Team Members Support</h6>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="#F37329"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h6>95% Visa Success Rate</h6>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="#F37329"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h6>24/7 Online Support</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-4">
            <div>
              <Link href="/about-us">
                <Button>About More</Button>
              </Link>
            </div>
            <div>
              <svg
                className="animate-floating"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_219_2197)">
                  <path
                    d="M37.6222 1.27511C39.6316 2.7786 40.879 4.33739 40.9763 4.43981C44.4985 8.51808 46.4506 14.5535 45.2861 21.011C44.5374 24.0927 44.2209 24.4635 43.3995 26.2394L43.3831 26.2527C42.9325 27.2769 40.2359 31.392 36.0664 33.5776C27.8392 37.7726 22.2431 34.7493 17.2769 32.5698L21.559 29.0866C22.3343 28.4557 21.7987 27.2031 20.8073 27.3281L0.872714 29.8486C0.70204 29.8699 0.539839 29.9353 0.401988 30.0381C0.264136 30.141 0.155356 30.2779 0.0862948 30.4354C0.0172297 30.593 -0.00974405 30.7657 0.00800192 30.9368C0.0257479 31.1079 0.0876108 31.2715 0.187537 31.4115L11.9287 47.9109C12.5002 48.7149 13.7681 48.2848 13.7333 47.2985L13.5141 41.1503C14.5383 41.4453 26.5744 48.508 39.6521 39.0446C43.802 35.9895 45.962 32.4869 47.8363 28.0286C48.4385 26.2046 49.054 23.6349 49.1431 21.4811C49.4145 13.8868 46.3225 7.5615 41.8172 3.61842C40.793 2.78884 40.1867 2.1303 37.8885 0.862368C37.6232 0.716935 37.3784 1.09281 37.6222 1.27511Z"
                    fill="#F37329"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_219_2197">
                    <rect
                      width="49.1604"
                      height="49.1604"
                      fill="white"
                      transform="translate(49.1604) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </FadeInLeftWithSlowBounce>
        {/* column */}
        <FadeInRightWithSlowBounce className="flex min-h-[400px] w-full basis-full items-center gap-x-5 xl:basis-1/2">
          <div className="relative min-h-[350px] basis-1/2">
            <Image
              className="rounded-md object-cover"
              src="/images/pages/home/about_section/about_img_1.png"
              alt="About Root Education"
              fill
            />
          </div>
          <div className="flex min-h-[500px] w-full basis-1/2 flex-col justify-center space-y-5 xl:space-y-5">
            {/* <Dialog>
              <DialogTrigger asChild>
                <button className="flex w-full basis-full items-center justify-center gap-x-2 rounded-lg border border-primary px-3 py-6 text-sm font-medium text-secondary">
                  <IoPlayCircle className="text-4xl text-primary" />

                  <span>Watch Video</span>
                </button>
              </DialogTrigger>
              <DialogContent className="custom-dialog mx-10 inline-block border border-primary bg-white">
                <div className="p-5">
                  <ReactPlayer
                    playing
                    controls
                    style={{
                      border: "1px solid #ddd",
                    }}
                    url="/Root education.mp4"
                  />
                </div>
              </DialogContent>
            </Dialog> */}

            <button
              className="flex w-full basis-full items-center justify-center gap-x-2 rounded-lg border border-primary px-3 py-6 text-sm font-medium text-secondary"
              onClick={() => setIsOpen(true)}
            >
              <IoPlayCircle className="text-4xl text-primary" />

              <span>Watch Video</span>
            </button>

            <div className="relative min-h-[350px]">
              <Image
                className="rounded-md object-cover"
                src="/images/pages/home/about_section/about_img_2.png"
                alt="About Root Education"
                fill
              />
            </div>
          </div>
        </FadeInRightWithSlowBounce>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-md transition-all">
                  <div className="mb-5 flex justify-end">
                    <RxCross2
                      className="cursor-pointer rounded-full p-1 text-4xl duration-200 hover:bg-black hover:bg-opacity-[10%]"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <ReactPlayer
                    className="min-h-[60vh] w-full"
                    playing
                    controls
                    width="100%"
                    style={{
                      border: "1px solid #ddd",
                    }}
                    url="/Root education.mp4"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default AboutUs;

// min-h-[70vh] max-w-[1000px]
