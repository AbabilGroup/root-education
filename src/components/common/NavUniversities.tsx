"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/NavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { apiUrl } from "@/secrets";

const NavUniversities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["universities"],
    queryFn: () => axios.get(`${apiUrl}/all_university/`),
  });

  console.log(data);

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
      {data?.data?.map(
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
                href="/universities/apiru-haret-university"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="flex items-center justify-start gap-x-2 font-semibold text-secondary duration-100 hover:text-primary">
                  <Image
                    src={`${university.logo ? university.logo : ""}`}
                    alt=""
                    height={30}
                    width={30}
                  />
                  <span>{university.name}</span>
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
