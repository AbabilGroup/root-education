import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { NavMenu } from "./NavMenu";

const Header = () => {
  return (
    <header className="py-3">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <div className="relative h-[43px] w-[110px]">
            <Image
              className="object-cover"
              src="/images/logo.svg"
              alt="Root Education"
              fill
            />
          </div>
        </Link>

        {/* <ul className="flex items-center justify-between gap-10 text-sm font-semibold">
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="duration-200 hover:text-primary" href="#">
              About Us
            </Link>
          </li>
        </ul> */}

        <NavMenu />

        <Button>Consultation</Button>
      </nav>
    </header>
  );
};

export default Header;
