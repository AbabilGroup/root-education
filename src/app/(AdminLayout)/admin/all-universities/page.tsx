import AllUniversityTable from "@/components/admin/pages/all_universities/AllUniversityTable";
import { getAllUniversities } from "@/services/getAllUniversities";
import UniversityPagination from "@/components/admin/pages/all_universities/UniversityPagination";

const AllUniversitiesPage = async ({
  searchParams,
}: {
  searchParams:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined;
}) => {
  const universityData = await getAllUniversities(searchParams);

  return (
    <main className="p-10">
      <div>
        <h2 className="mb-5 text-xl font-semibold">All University list</h2>

        <AllUniversityTable />
      </div>
      <UniversityPagination
        universityData={universityData}
        searchParams={searchParams}
      />
    </main>
  );
};

export default AllUniversitiesPage;
