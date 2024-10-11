import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

type TServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: TServiceCardProps) => {
  return (
    <FadeInRightWithSlowBounce className="group flex flex-col items-center gap-3 rounded-lg border border-l-8 border-r-8 border-l-primary border-r-primary px-10 py-5 shadow-lg duration-300 hover:bg-primary">
      <div className="rounded-full border-[2px] border-dotted border-primary bg-transparent p-2 duration-300 group-hover:border-white">
        <div className="rounded-full bg-primary p-4 duration-300 group-hover:bg-white">
          {icon}
        </div>
      </div>

      <h5 className="text-center text-2xl font-medium duration-300 group-hover:text-white">
        {title}
      </h5>

      <p className="text-center text-sm font-medium duration-300 group-hover:text-white">
        {description}
      </p>

      <div>
        <Link
          href=""
          className="flex items-center justify-start text-sm font-medium text-primary duration-200 hover:text-secondary group-hover:text-white"
        >
          See More <MdArrowRight className="text-xl" />
        </Link>
      </div>
    </FadeInRightWithSlowBounce>
  );
};

export default ServiceCard;
