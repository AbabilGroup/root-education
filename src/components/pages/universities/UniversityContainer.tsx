import UniversityCard from "@/components/common/UniversityCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { University } from "@/types/university";

const UniversityContainer = ({
  universityData,
}: {
  universityData: {
    total_universities: number;
    current_page: number;
    next_page: null | string | number;
    previous_page: null | string | number;
    total_pages: number;
    results: Partial<University>[];
  };
}) => {
  const universities = universityData.results;
  console.log("🚀 ~ universities:", universities);

  return (
    <>
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {universities.map((university) => (
          <UniversityCard university={university} key={university.id} />
        ))}
      </div>
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            {universityData.current_page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/universities?page${universityData.previous_page}`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: universityData.total_pages }).map(
              (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`/items?page=${index + 1}`}
                    isActive={index + 1 === universityData.current_page}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            {universityData.current_page < universityData.total_pages && (
              <PaginationItem>
                <PaginationNext
                  href={`/universities?page${universityData.next_page}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default UniversityContainer;
