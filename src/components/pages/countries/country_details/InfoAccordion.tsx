"use client";

import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import { ReactNode, useState } from "react";

const InfoAccordion = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <FadeInLeftWithSlowBounce>
      <div className={`duration-500 ${accordionOpen ? "" : ""} `}>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex min-h-14 w-full items-stretch justify-between"
        >
          <div
            className={`flex basis-full items-center justify-start gap-2 py-1 text-left font-medium ${accordionOpen ? "text-primary" : "text-secondary"}`}
          >
            <div>
              {accordionOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                    stroke="#F37329"
                  />
                  <circle cx="9" cy="9" r="6" fill="#F37329" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                    stroke="#111111"
                  />
                  <circle cx="9" cy="9" r="6" fill="#111111" />
                </svg>
              )}
            </div>

            {title}
          </div>
          {/* <div className="flex min-h-full basis-[30px] items-center justify-end rounded-r-lg bg-primary px-4 py-4 text-white duration-300">
            {accordionOpen ? (
              <IoIosArrowUp className="text-xl" />
            ) : (
              <IoIosArrowDown className="text-xl" />
            )}
          </div> */}
        </button>

        <div
          className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${
            accordionOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className={`overflow-hidden px-1 font-medium text-secondary`}>
            {content}
          </div>
        </div>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default InfoAccordion;
