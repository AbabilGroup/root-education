"use client";

import Section from "@/components/common/Section";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { useRouter, useSearchParams } from "next/navigation";
import UniversityContainer from "./UniversityContainer";
import { University } from "@/types/university";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

const UniversitiesWeRepresent = ({
  universityData,
}: {
  universityData: {
    total_universities: number;
    current_page: number;
    next_page: null | string | number;
    previous_page: null | string | number;
    total_pages: number;
    results: University[];
  };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = (page: string) => {
    params.set("page", page);
    router.push(`/universities?${params.toString()}`);
  };

  return (
    <Section
      className="pb-[100px] pt-[100px]"
      sectionName="Universities We Represent"
      title="Top-tier international partner universities"
    >
      {/* <div className="container">
        <div className="mb-10 flex flex-col items-center justify-between gap-y-3 rounded-lg border px-5 py-3 shadow-md md:flex-row">
          <h6 className="font-medium text-primary">
            Showing 01 - 18 of {universityData.total_universities} Results
          </h6>
          <div className="flex items-center justify-end gap-x-5">
            <button className="rounded-md border p-1 text-primary shadow">
              <IoGridSharp className="text-2xl" />
            </button>
            <Select onValueChange={(value) => handlePageChange(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by Default" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="default"
                  >
                    Default
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="high"
                  >
                    Total Students (High to Low)
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="low"
                  >
                    Total Students (Low to High)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div> */}
      <UniversityContainer />

      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            {universityData.current_page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() =>
                    handlePageChange(
                      universityData.previous_page
                        ? universityData.previous_page?.toString()
                        : "",
                    )
                  }
                  // href={`/universities?page${universityData.previous_page}`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: universityData.total_pages }).map(
              (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    className="cursor-pointer hover:bg-sidebar-accent"
                    onClick={() => handlePageChange((index + 1).toString())}
                    // href={`/universities?page=${index + 1}`}
                    isActive={
                      (index + 1).toString() ===
                      (universityData.current_page || 1).toString()
                    }
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            {universityData.current_page < universityData.total_pages && (
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() =>
                    handlePageChange(
                      universityData.next_page
                        ? universityData.next_page?.toString()
                        : "",
                    )
                  }
                  // href={`/universities?page${universityData.next_page}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Section>
  );
};

export default UniversitiesWeRepresent;
