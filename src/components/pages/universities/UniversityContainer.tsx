"use client";

import UniversityCard from "@/components/common/UniversityCard";
import UniversitiesSkeletons from "@/components/skeletons/UniversitiesSkeletons";
import { apiUrl } from "@/secrets";
import { University } from "@/types/university";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const UniversityContainer = () => {
  const searchParams = useSearchParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["universities", searchParams.toString()], // Include params in queryKey
    queryFn: async () => {
      const paramsString = searchParams.toString();
      const url = `${apiUrl}/all_university/${paramsString ? `?${paramsString}` : ""}`;
      const response = await axios.get(url);
      return response.data;
    },
  });

  const universities = data?.results;

  if (isLoading) return <UniversitiesSkeletons />;
  if (isError)
    return <p>Failed to load universities. Please try again later.</p>;

  return (
    <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
      {universities?.map((university: University) => (
        <UniversityCard university={university} key={university.id} />
      ))}
    </div>
  );
};

export default UniversityContainer;
