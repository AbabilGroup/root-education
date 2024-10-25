import Image from "next/image";
import Link from "next/link";
import SiteButton from "../ui/SiteButton";
import { NavMenu } from "./NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

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

        <SiteButton className="hidden xl:inline" to="/consultation">
          Consultation
        </SiteButton>

        {/* mobile nav  */}
        <Sheet>
          <SheetTrigger asChild>
            <GiHamburgerMenu className="cursor-pointer text-2xl xl:hidden" />
          </SheetTrigger>
          <SheetContent
            className="z-[50000] flex flex-col items-start justify-start bg-white"
            side="left"
          >
            <SheetHeader>
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
            </SheetHeader>

            <SheetFooter className="mt-auto border">
              <SiteButton to="/consultation">Consultation</SiteButton>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
