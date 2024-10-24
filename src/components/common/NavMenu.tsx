"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";

const servicesLinks = [
  {
    id: 1,
    name: "Study Abroad Consultation",
    path: "/services/study-abroad-consultation",
  },
  {
    id: 2,
    name: "University Selection",
    path: "/services/university-selection",
  },
  {
    id: 3,
    name: "Application Assistance",
    path: "/services/application-assistance",
  },
  {
    id: 4,
    name: "Visa Guidance",
    path: "/services/visa-guidance",
  },
  {
    id: 5,
    name: "Scholarship & Financial Aid",
    path: "/services/scholarship-and-financial-aid",
  },
  {
    id: 6,
    name: "Pre-departure Briefing",
    path: "/services/pre-departure-briefing",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList>
        <NavigationMenuItem className="hover:text-primary">
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="w-[300px] space-y-2 p-4 text-sm">
              {servicesLinks.map((service) => (
                <NavigationMenuItem className="list-none" key={service.id}>
                  <Link href={service.path} legacyBehavior passHref>
                    <NavigationMenuLink className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary">
                      <IoMdArrowDropright className="text-2xl" />
                      {service.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>Countries</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="grid w-[650px] grid-cols-3 gap-y-3 p-4 text-sm">
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/countries/study-in-romania"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/flag.svg"
                    alt="Flag"
                    height={30}
                    width={30}
                  />
                  <span>Study in Romania</span>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>
            <Link href="/universities">Universities</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="grid w-[750px] grid-cols-3 gap-y-3 p-4 text-sm">
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary"
                  href="/universities/oxford-university"
                >
                  <Image
                    src="/icons/university_logo.svg"
                    alt="University logo"
                    height={30}
                    width={30}
                  />
                  <span>European Politechnic University, Bulgaria</span>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <Link href="/how-we-work" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              How We Work
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
