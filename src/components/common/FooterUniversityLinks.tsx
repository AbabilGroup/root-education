"use client";

import { apiUrl } from "@/secrets";
import { University } from "@/types/university";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { Skeleton } from "../ui/skeleton";

const FooterUniversityLinks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["universities"],
    queryFn: async () =>
      await axios.get(`${apiUrl}/all_university/?limit=${Number(8)}`),
  });

  const universities = data?.data;

  if (isLoading)
    return (
      <div className="space-y-3">
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </div>
    );

  return (
    <ul className="flex flex-col justify-between gap-4">
      {universities.results.map((university: University) => (
        <li className="flex items-center" key={university.id}>
          <div>
            <IoMdArrowDropright className="text-2xl" />
          </div>
          <Link
            className="duration-200 hover:text-primary"
            href={`/universities/${university.slug}`}
          >
            {university.name}
          </Link>
        </li>
      ))}
      <li className="flex items-center">
        <div>
          <IoMdArrowDropright className="text-2xl" />
        </div>
        <Link className="duration-200 hover:text-primary" href="/universities">
          View All Universities
        </Link>
      </li>
    </ul>
  );
};

export default FooterUniversityLinks;
