import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const TeamCard = () => {
  return (
    <FadeInLeftWithSlowBounce className="group relative rounded-xl shadow-md">
      <div className="absolute top-0 min-h-[200px] w-full rounded-xl bg-primary duration-300 group-hover:bg-secondary"></div>
      <div className="mx-4 mt-4">
        <div className="relative min-h-[276px] w-full">
          <Image
            className="rounded-md object-cover"
            src="/images/pages/about_us/team_member_photo.svg"
            alt="Team Member"
            fill
          />
        </div>
        <h4 className="mt-2 text-center text-xl font-medium">Emily White</h4>
        <p className="mb-3 mt-1 text-center text-sm font-medium">
          Senior Education Counselor
        </p>

        <div className="-mb-[21px] flex items-center justify-center gap-3 rounded-md bg-primary py-2 duration-300 group-hover:bg-secondary">
          <Link href="https://www.facebook.com/hireandfire.eu" target=" blank">
            <FaFacebook className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
          </Link>
          <Link
            href="https://www.instagram.com/hireandfire.eu/"
            target=" blank"
          >
            <FaInstagram className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
          </Link>
          <Link href="https://twitter.com/hireandfireeu" target=" blank">
            <FaTwitter className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
          </Link>
          <Link href="https://telegram.org/" target=" blank">
            <FaTelegramPlane className="rounded-full bg-white p-1 text-2xl text-primary duration-200 hover:bg-primary hover:text-white" />
          </Link>
        </div>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default TeamCard;
