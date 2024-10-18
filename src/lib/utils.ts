import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeAndRemoveHyphens = (str: string) => {
  const replacedString = str
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\band\b/gi, "&"); // Replace "and" with "&"

  const capitalizedString = replacedString
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === "in") {
        return word.toLowerCase(); // Keep "in" lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the rest
    })
    .join(" ");

  return capitalizedString;
};

export const formatCountryRoute = (input: string): string => {
  return input
    .split("-") // Split the string at each hyphen
    .map((word) => {
      if (word.toLowerCase() === "in") {
        return "in"; // Keep "in" lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of other words
    })
    .join(" "); // Join the words back with spaces
};

// const replacedString = str.replace(/-/g, " ");

// const capitalizedString = replacedString
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

// return capitalizedString;
