import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { NavMenu } from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-[10000] bg-white py-3 shadow">
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

        <NavMenu />

        <Button>Consultation</Button>
      </nav>
    </header>
  );
};

export default Header;
