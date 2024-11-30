"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { University } from "@/types/university";
import { useRouter } from "next/navigation";

const UniversityPagination = ({
  universityData,
  searchParams,
}: {
  universityData: {
    total_universities: number;
    current_page: null | string | number;
    next_page: null | string | number;
    previous_page: null | string | number;
    total_pages: number;
    results: University[];
  };
  searchParams:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined;
}) => {
  const router = useRouter();
  // const searchParams = useSearchParams();

  const handlePageChange = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`/admin/all-universities?${params.toString()}`);
  };

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          {Number(universityData.current_page) > 1 && (
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
              />
            </PaginationItem>
          )}
          {Array.from({ length: universityData.total_pages }).map(
            (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => handlePageChange((index + 1).toString())}
                  isActive={
                    (index + 1).toString() === universityData.current_page
                  }
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          {Number(universityData.current_page) < universityData.total_pages && (
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
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UniversityPagination;
