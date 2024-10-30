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
    ?.split("-") // Split the string at each hyphen
    .map((word) => {
      if (word.toLowerCase() === "in") {
        return "in"; // Keep "in" lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of other words
    })
    .join(" "); // Join the words back with spaces
};

export const formatIndianNumber = (number: number) => {
  const numStr = number.toString();

  // Add commas as per Indian numbering format
  const lastThree = numStr.slice(-3);
  const otherNumbers = numStr.slice(0, -3);
  const formattedNumber =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;

  return formattedNumber.startsWith(",") ? lastThree : formattedNumber;
};

export const getYearFromDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
