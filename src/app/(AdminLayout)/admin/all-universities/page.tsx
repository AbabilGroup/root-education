import AllUniversityTable from "@/components/admin/pages/all_universities/AllUniversityTable";
import { getAllUniversities } from "@/services/getAllUniversities";

const AllUniversitiesPage = async () => {
  const universityData = await getAllUniversities();

  const universities = universityData.results;

  return (
    <main className="p-10">
      <AllUniversityTable universities={universities} />
    </main>
  );
};

export default AllUniversitiesPage;
