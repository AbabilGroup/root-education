import AllUniversityTable from "@/components/admin/pages/all_universities/AllUniversityTable";
import { getAllUniversities } from "@/services/getAllUniversities";

import UniversityPagination from "@/components/admin/pages/all_universities/UniversityPagination";
import { Suspense } from "react";
import Loading from "./loading";

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

  const universities = universityData.results;

  return (
    <main className="p-10">
      <div>
        <h2 className="mb-5 text-xl font-semibold">All University list</h2>

        <Suspense fallback={<Loading />}>
          <AllUniversityTable universities={universities} />
        </Suspense>
      </div>
      <UniversityPagination
        universityData={universityData}
        searchParams={searchParams}
      />
    </main>
  );
};

export default AllUniversitiesPage;
