import Image from "next/image";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";

const BlogCard = () => {
  return (
    <div className="rounded-lg border shadow-md">
      <div className="relative min-h-[200px] w-full">
        <Image
          className="h-full w-full"
          src="/images/pages/blogs/blog_thumbnail.svg"
          alt="The Best Study Abroad Experiences with Root Education"
          height={250}
          width={520}
        />
      </div>
      <div className="mx-10 mt-6 flex items-center justify-between gap-x-5 rounded-md border bg-white px-3 py-2 text-sm font-medium text-primary shadow-sm">
        <div className="flex items-center justify-start gap-x-2">
          <LuCalendarClock className="text-xl" />

          <h6 className="text-xs">08th August, 2024</h6>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <BiCommentDetail className="text-xl" />

          <h6 className="text-xs">Comments (03)</h6>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <h5 className="text-xl font-semibold">
          The Best Study Abroad Experiences with Root Education
        </h5>
        <p className="text-sm font-medium">
          Discover the best study abroad experiences curated by Root Education
          for an unforgettable global adventure.
        </p>
        <div>
          <Link
            href=""
            className="flex items-center justify-start text-sm font-medium text-primary duration-200 group-hover:text-white hover:text-secondary"
          >
            See More <MdArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
