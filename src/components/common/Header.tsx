"use client";

import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { servicesLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/secrets";
import axios from "axios";
import { Study_Country } from "@/types/country";
import { University } from "@/types/university";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);

  const { isLoading: countryLoading, data: countryData } = useQuery({
    queryKey: ["countries"],
    queryFn: () => axios.get(`${apiUrl}/study_country/`),
  });

  const countries = countryData?.data;

  const { isLoading: UniversityLoading, data: universityData } = useQuery({
    queryKey: ["universities"],
    queryFn: () => axios.get(`${apiUrl}/all_university/?limit=all`),
  });

  const universities = universityData?.data.results;

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

        <Link href="/consultation">
          <Button className="hidden xl:inline">Consultation</Button>
        </Link>

        {/* mobile nav  */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <GiHamburgerMenu className="cursor-pointer text-2xl xl:hidden" />
          </SheetTrigger>
          <SheetContent
            className="z-[50000] flex flex-col items-start overflow-x-hidden overflow-y-scroll bg-white"
            side="left"
          >
            <SheetHeader>
              <Link className="" href="/" onClick={closeSheet}>
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

            <div className="w-full py-10">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className={`block rounded-lg border px-2 py-2 ${pathname === "/" ? "border-primary bg-primary text-white" : ""}`}
                    href="/"
                    onClick={closeSheet}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`block rounded-lg border px-2 py-2 ${pathname === "/about-us" ? "border-primary bg-primary text-white" : ""}`}
                    href="/about-us"
                    onClick={closeSheet}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`block rounded-lg border px-2 py-2 ${pathname === "/how-we-work" ? "border-primary bg-primary text-white" : ""}`}
                    href="/how-we-work"
                    onClick={closeSheet}
                  >
                    How We Work
                  </Link>
                </li>

                <li>
                  <Collapsible
                    open={isServicesOpen}
                    onOpenChange={setIsServicesOpen}
                  >
                    <CollapsibleTrigger
                      className={`flex w-full items-center justify-between rounded-lg border px-2 py-2 text-start ${pathname === "/services/study-abroad-consultation" && "border-primary bg-primary text-white"} ${pathname === "/services/university-selection" && "border-primary bg-primary text-white"} ${pathname === "/services/application-assistance" && "border-primary bg-primary text-white"} ${pathname === "/services/visa-guidance" && "border-primary bg-primary text-white"} ${pathname === "/services/scholarship-and-financial-aid" && "border-primary bg-primary text-white"} ${pathname === "/services/pre-departure-briefing" && "border-primary bg-primary text-white"}`}
                    >
                      Services{" "}
                      {isServicesOpen ? (
                        <IoIosArrowForward />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="">
                        {servicesLinks.map((service) => (
                          <li key={service.id}>
                            <Link
                              className={`my-2 flex items-center justify-start rounded-lg px-2 ${pathname === service.path && "text-primary"}`}
                              href={service.path}
                              onClick={closeSheet}
                            >
                              <IoMdArrowDropright className="text-2xl" />{" "}
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>

                <li>
                  <Collapsible
                    open={isCountriesOpen}
                    onOpenChange={setIsCountriesOpen}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border px-2 py-2 text-start">
                      Countries{" "}
                      {isCountriesOpen ? (
                        <IoIosArrowForward />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="space-y-1 py-3 pl-2">
                        {countryLoading
                          ? "Loading..."
                          : countries?.map((country: Study_Country) => (
                              <li key={country.id}>
                                <Link
                                  className="flex items-center justify-start gap-2 rounded-lg p-1 hover:bg-sidebar-accent"
                                  href={`/countries/${country.route_slug}`}
                                >
                                  <Image
                                    className="size-[30px] rounded-full border"
                                    src={country.flag as string}
                                    alt={country.country}
                                    height={30}
                                    width={30}
                                  />
                                  <span className="font-medium">
                                    Study in {country.country}
                                  </span>
                                </Link>
                              </li>
                            ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>

                <li>
                  <Collapsible
                    open={isUniversitiesOpen}
                    onOpenChange={setIsUniversitiesOpen}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border px-2 py-2 text-start">
                      Universities{" "}
                      {isUniversitiesOpen ? (
                        <IoIosArrowForward />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="space-y-1 py-3 pl-2">
                        {UniversityLoading
                          ? "Loading..."
                          : universities?.map((university: University) => (
                              <li key={university.id}>
                                <Link
                                  className="flex items-center justify-start gap-2 rounded-lg p-1 hover:bg-sidebar-accent"
                                  href={`/countries/${university.slug}`}
                                >
                                  <Image
                                    className="size-[30px] rounded-full border"
                                    src={university.logo as string}
                                    alt={university.short_info.country}
                                    height={30}
                                    width={30}
                                  />
                                  <span className="font-medium">
                                    {university.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>

                <li>
                  <Link
                    className={`block rounded-lg border px-2 py-2 ${pathname === "/contact-us" ? "border-primary bg-primary text-white" : ""}`}
                    href="/contact-us"
                    onClick={closeSheet}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <SheetFooter className="mt-auto">
              <Link className="" href="/consultation" onClick={closeSheet}>
                <Button>Consultation</Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
