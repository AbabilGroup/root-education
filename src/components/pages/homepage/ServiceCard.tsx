import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

type TServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: TServiceCardProps) => {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-lg border border-l-8 border-r-8 border-l-primary border-r-primary p-5 shadow-lg duration-300 hover:bg-primary">
      <div>
        {icon}
       
      </div>

      <h5 className="text-2xl font-medium duration-300 group-hover:text-white">
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
    </div>
  );
};

export default ServiceCard;
