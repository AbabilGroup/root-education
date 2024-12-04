"use client";

import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/NavigationMenu";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import { apiUrl } from "@/secrets";

const NavCountries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => axios.get(`${apiUrl}/study_country/`),
  });

  if (isLoading)
    return (
      <div className="grid w-[650px] grid-cols-3 gap-y-3 p-4 text-sm">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

  return (
    <div className="grid w-[650px] grid-cols-3 gap-y-3 p-4 text-sm">
      {data?.data?.results?.map(
        (country: {
          id: number;
          country: string;
          slug: string;
          route_slug: string;
          flag: string;
        }) => (
          <div key={country.id}>
            <NavigationMenuItem className="list-none">
              <Link
                href={`/countries/${country.route_slug}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary">
                  <Image
                    className="rounded-full border"
                    src={country.flag}
                    alt={country.country}
                    height={30}
                    width={30}
                  />
                  <span>Study in {country.country}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        ),
      )}
    </div>
  );
};

export default NavCountries;
