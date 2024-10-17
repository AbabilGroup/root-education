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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/study-abroad-consultation"
              >
                <IoMdArrowDropright className="text-2xl" /> Study Abroad
                Consultation
              </Link>

              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/university-selection"
              >
                <IoMdArrowDropright className="text-2xl" /> University Selection
              </Link>

              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/application-assistance"
              >
                <IoMdArrowDropright className="text-2xl" /> Application
                Assistance
              </Link>

              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/visa-guidance"
              >
                <IoMdArrowDropright className="text-2xl" /> Visa Guidance
              </Link>

              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/scholarship-and-financial-aid"
              >
                <IoMdArrowDropright className="text-2xl" /> Scholarship &
                Financial Aid
              </Link>

              <Link
                className="flex items-center justify-start font-medium text-secondary duration-100 hover:text-primary"
                href="/services/pre-departure-briefing"
              >
                <IoMdArrowDropright className="text-2xl" /> Pre-departure
                Briefing
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>Countries</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuTrigger>Universities</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
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
