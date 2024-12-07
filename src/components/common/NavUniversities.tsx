"use client";

import { NavigationMenuItem, NavigationMenuLink } from "../ui/NavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";
import { apiUrl } from "@/secrets";
import { useQuery } from "@tanstack/react-query";

const NavUniversities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["universities"],
    queryFn: () => axios.get(`${apiUrl}/all_university/?limit=all`),
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
    <div className="grid w-[900px] grid-cols-3 gap-x-5 gap-y-3 p-4 text-sm">
      {data?.data?.results?.map(
        (university: {
          id: number;
          name: string;
          description: string;
          slug: string;
          logo: string;
          short_info: {
            country: string;
            university_type: string;
            total_students: number;
            launched: number;
          };
        }) => (
          <div key={university.id}>
            <NavigationMenuItem className="list-none">
              <Link
                href={`/universities/${university.slug}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="flex items-center gap-x-2 font-semibold text-secondary duration-100 hover:text-primary">
                  <Image
                    className="size-[30px] rounded-full border"
                    src={university.logo ? university.logo : ""}
                    alt={university.name}
                    height={30}
                    width={30}
                  />
                  <span className="text-xs">{university.name}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        ),
      )}
    </div>
  );
};

export default NavUniversities;
