import Image from "next/image";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import { Button } from "../ui/Button";
import { formatIndianNumber, getYearFromDate } from "@/lib/utils";
import Link from "next/link";
import { University } from "@/types/university";

const UniversityCard = ({
  university,
}: {
  university: Partial<University>;
}) => {
  return (
    <FadeInLeftWithSlowBounce className="flex flex-col gap-4 rounded-xl border p-5 shadow-md">
      <div className="relative min-h-[250px] w-full">
        <Image
          className="rounded-lg object-cover object-center"
          src={`${university.photo ? university.photo : "/"}`}
          alt={university.name ? university.name : ""}
          fill
        />
      </div>
      <h5 className="text-xl font-semibold">
        {university.name}, {university.short_info?.country}
      </h5>
      <p className="line-clamp-3 text-sm font-medium">
        {university.description}
      </p>

      {/* infos  */}
      <div className="grid grid-cols-1 gap-x-3 gap-y-2 md:grid-cols-2">
        {/* info item  */}
        <div className="flex items-center justify-start gap-2">
          <div>
            <Image src="icons/mark.svg" height={20} width={20} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium">
              Country : {university.short_info?.country}
            </p>
          </div>
        </div>
        {/* info item  */}
        <div className="flex items-center justify-start gap-2">
          <div>
            <Image src="icons/graduation.svg" height={20} width={20} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium">
              University Type : {university.short_info?.university_type}
            </p>
          </div>
        </div>
        {/* info item  */}
        <div className="flex items-center justify-start gap-2">
          <div>
            <Image src="icons/students.svg" height={20} width={20} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium">
              Total Students :{" "}
              {university.short_info?.total_students
                ? formatIndianNumber(university.short_info?.total_students)
                : "N/A"}
            </p>
          </div>
        </div>
        {/* info item  */}
        <div className="flex items-center justify-start gap-2">
          <div>
            <Image src="icons/calendar.svg" height={20} width={20} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium">
              Launched :{" "}
              {university.short_info?.launched
                ? getYearFromDate(university.short_info?.launched.toString())
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-start">
        <Link href={`/universities/${university.slug}`}>
          <Button
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4.16859V12.8353M8 4.16859C7.22133 3.65125 6.164 3.33325 5 3.33325C3.836 3.33325 2.77867 3.65125 2 4.16859V12.8353C2.77867 12.3179 3.836 11.9999 5 11.9999C6.164 11.9999 7.22133 12.3179 8 12.8353M8 4.16859C8.77867 3.65125 9.836 3.33325 11 3.33325C12.1647 3.33325 13.2213 3.65125 14 4.16859V12.8353C13.2213 12.3179 12.1647 11.9999 11 11.9999C9.836 11.9999 8.77867 12.3179 8 12.8353"
                  stroke="#FDFDFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Admission Now
          </Button>
        </Link>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default UniversityCard;
