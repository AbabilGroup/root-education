import { University } from "@/types/university";
import Image from "next/image";

const UniversityLogoCard = ({ university }: { university: University }) => {
  return (
    <div className="relative size-[190px]">
      <Image
        className="rounded-full border object-cover object-center shadow"
        src={university.logo as string}
        alt={university.name}
        fill
      />
      <div className="absolute right-0 top-0 p-5 text-white"></div>
    </div>
  );
};

export default UniversityLogoCard;
