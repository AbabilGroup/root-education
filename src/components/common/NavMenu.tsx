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
import { usePathname } from "next/navigation";
import NavCountries from "./NavCountries";
import { servicesLinks } from "@/constants";
import NavUniversities from "./NavUniversities";

export function NavMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList>
        <NavigationMenuItem
          className={`hover:text-primary ${pathname === "/about-us" && "text-primary"}`}
        >
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem
          className={`hover:text-primary ${pathname === "/services/study-abroad-consultation" && "text-primary"} ${pathname === "/services/university-selection" && "text-primary"} ${pathname === "/services/application-assistance" && "text-primary"} ${pathname === "/services/visa-guidance" && "text-primary"} ${pathname === "/services/scholarship-and-financial-aid" && "text-primary"} ${pathname === "/services/pre-departure-briefing" && "text-primary"}`}
        >
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="w-[300px] space-y-2 p-4 text-sm">
              {servicesLinks.map((service) => (
                <NavigationMenuItem className="list-none" key={service.id}>
                  <Link href={service.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`flex items-center justify-start font-medium duration-100 hover:text-primary ${pathname === service.path && "text-primary"}`}
                    >
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
            <NavCountries />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>
            <Link href="/universities">Universities</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <NavUniversities />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem
          className={`hover:text-primary ${pathname === "/how-we-work" && "text-primary"}`}
        >
          <Link href="/how-we-work" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              How We Work
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem
          className={`hover:text-primary ${pathname === "/contact-us" && "text-primary"}`}
        >
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
