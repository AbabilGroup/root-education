import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeAndRemoveHyphens = (str: string) => {
  // const replacedString = str.replace(/-/g, " ");

  // const capitalizedString = replacedString
  //   .split(" ")
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(" ");

  // return capitalizedString;

  const replacedString = str
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\band\b/gi, "&"); // Replace "and" with "&"

  const capitalizedString = replacedString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedString;
};
