"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { University } from "@/types/university";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const UniversityPagination = ({
  universityData,
}: {
  universityData: {
    total_universities: number;
    current_page: null | string | number;
    next_page: null | string | number;
    previous_page: null | string | number;
    total_pages: number;
    results: University[];
  };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
                <Link
                  href={`/admin/all-universities?page=${index + 1}`}
                  className={`${(index + 1).toString() === (universityData.current_page || 1).toString() ? "bg-sidebar-accent" : ""} cursor-pointer px-[13px] py-2 hover:bg-sidebar-accent`}
                  // onClick={() => handlePageChange((index + 1).toString())}
                  // isActive={
                  //   (index + 1).toString() ===
                  //   (universityData.current_page || 1).toString()
                  // }
                >
                  {index + 1}
                </Link>
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
