import Image from "next/image";

const UniversityLogoCard = () => {
  return (
    <div className="relative size-[190px]">
      <Image
        className="object-cover"
        src="/images/pages/about_us/university_logo.png"
        alt="university logo"
        fill
      />
      <div className="absolute right-0 top-0 p-5 text-white"></div>
    </div>
  );
};

export default UniversityLogoCard;
