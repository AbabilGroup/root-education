import Image from "next/image";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

const StudyCountryCard = () => {
  return (
    <div className="m-3 rounded-lg shadow-lg">
      <div className="relative min-h-[210px]">
        <Image
          className="h-full w-full"
          src="/images/study_country_image.png"
          alt="country"
          fill
        />
      </div>

      <div className="space-y-3 px-5 pb-5">
        <div className="flex items-center justify-center">
          <div className="relative -mt-[30px] flex size-[60px] items-center justify-center rounded-full border-[2px] border-dotted border-primary bg-white">
            <Image
              className="relative"
              src="/images/study_country_flag.png"
              alt="Study Country"
              height={50}
              width={50}
            />
          </div>
        </div>
        <h4 className="text-center text-2xl font-medium duration-300 group-hover:text-white">
          Study in Romania
        </h4>
        <p className="text-center text-sm font-medium duration-300 group-hover:text-white">
          Study in Romania offers quality education, affordable tuition, vibrant
          culture, diverse landscapes, and multilingual courses.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href=""
            className="flex items-center justify-start text-sm font-medium text-primary duration-200 hover:text-secondary group-hover:text-white"
          >
            See More <MdArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyCountryCard;
