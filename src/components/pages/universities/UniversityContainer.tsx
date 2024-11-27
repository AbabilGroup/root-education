import UniversityCard from "@/components/common/UniversityCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const UniversityContainer = ({ universityData }) => {
  const universities = universityData.results;
  return (
    <>
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {universities.map(
          (university: {
            id: number;
            name: string;
            description: string;
            slug: string;
            logo: string;
            photo: string;
            short_info: {
              country: string;
              university_type: string;
              total_students: number;
              launched: number;
            };
          }) => (
            <UniversityCard university={university} key={university.id} />
          ),
        )}
      </div>
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            {universityData.currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/universities?page${universityData.previous_page}`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: universityData.totalPages }).map(
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
