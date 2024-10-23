import Section from "@/components/common/Section";
import UniversityCard from "@/components/common/UniversityCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoGridSharp } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const UniversitiesWeRepresent = () => {
  return (
    <Section
      sectionName="Universities We Represent"
      title="Top-tier international partner universities"
    >
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-between gap-y-3 rounded-lg border px-5 py-3 shadow-md md:flex-row">
          <h6 className="font-medium text-primary">
            Showing 01 - 18 of 36 Results
          </h6>
          <div className="flex items-center justify-end gap-x-5">
            <button className="rounded-md border p-1 text-primary shadow">
              <IoGridSharp className="text-2xl" />
            </button>
            <Select>
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
                    value="Total Students (High to Low)"
                  >
                    Total Students (High to Low)
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-secondary hover:bg-opacity-5"
                    value="Total Students (Low to High)"
                  >
                    Total Students (Low to High)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* card  */}
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
        <UniversityCard />
      </div>
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Section>
  );
};

export default UniversitiesWeRepresent;
