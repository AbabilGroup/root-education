import Image from "next/image";
import { MdCalendarMonth } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";

const Content = () => {
  return (
    <div className="basis-[66%] space-y-5">
      {/* blog image  */}
      <div className="relative min-h-[250px] md:min-h-[500px]">
        <Image
          className="rounded-xl object-cover"
          src="/images/blog_image.svg"
          alt="Blog"
          fill
        />
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <MdCalendarMonth />

          <p className="text-sm font-medium"> 08th August, 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <BiCommentDetail />

          <p className="text-sm font-medium">Comments (03)</p>
        </div>
      </div>

      <h2 className="text-4xl font-semibold">
        The Best Study Abroad Experiences with Root Education
      </h2>

      <p className="text-sm font-medium">
        Explore the best study abroad experiences with Root Education, where we
        connect you to top-tier international programs. Our expert team guides
        you through a curated selection of prestigious universities and vibrant
        cultures tailored to your academic and personal goals. From immersive
        cultural activities to cutting-edge academic courses, we ensure a
        transformative journey that enhances your global perspective and career
        prospects. Root Education provides personalized support every step of
        the way, making your study abroad adventure not only exciting but also
        fulfilling. Discover how our dedicated services can turn your dream of
        studying abroad into a reality.
      </p>

      <div className="space-y-3">
        <h5 className="text-xl font-bold">Why Choose Root Education?</h5>
        <p className="text-sm font-medium">
          Root Education stands out for its comprehensive approach to study
          abroad. We offer personalized counseling, cultural immersion, academic
          excellence, and career development—all tailored to your unique needs.
          Our commitment to your success means that you’ll receive the support
          you need to thrive, both during your time abroad and beyond.
        </p>
      </div>
    </div>
  );
};

export default Content;

// {formatDate(blog?.created_at)}
