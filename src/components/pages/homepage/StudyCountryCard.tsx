import { Study_Country } from "@/types/country";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

const StudyCountryCard = ({ country }: { country: Study_Country }) => {
  return (
    <div className="m-3 min-h-[385px] rounded-lg shadow-md">
      <div className="relative min-h-[210px]">
        <Image
          className="h-full w-full rounded-t-lg object-cover object-center"
          src={country.photo ? (country.photo as string) : ""}
          alt={country.country}
          fill
        />
      </div>

      <div className="space-y-3 px-5 pb-5">
        <div className="flex items-center justify-center">
          <div className="relative -mt-[30px] flex size-[60px] items-center justify-center rounded-full border-[2px] border-dotted border-primary bg-white">
            <Image
              className="relative"
              src={country.flag as string}
              alt={country.country}
              height={50}
              width={50}
            />
          </div>
        </div>
        <h4 className="text-center text-2xl font-medium duration-300 group-hover:text-white">
          Study in {country.country}
        </h4>
        <p className="line-clamp-3 text-center text-sm font-medium duration-300 group-hover:text-white">
          {country?.box1?.descriptions[0]?.description}
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={`/countries/study-in-${country.route_slug}`}
            className="flex items-center justify-start text-sm font-medium text-primary duration-200 group-hover:text-white hover:text-secondary"
          >
            See More <MdArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyCountryCard;
