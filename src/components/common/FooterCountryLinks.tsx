import { getAllCountries } from "@/services/getAllCountries";
import { Study_Country } from "@/types/country";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const FooterCountryLinks = async () => {
  const countries = await getAllCountries();

  return (
    <ul className="flex flex-col justify-between gap-4">
      {countries.map((country: Study_Country) => (
        <li className="flex items-center" key={country.id}>
          <IoMdArrowDropright className="text-2xl" />
          <Link
            className="duration-200 hover:text-primary"
            href={`/countries/${country.route_slug}`}
          >
            Study in {country.country}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterCountryLinks;
