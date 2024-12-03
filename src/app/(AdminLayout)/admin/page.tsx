import { getAllCountries } from "@/services/getAllCountries";
import { getAllUniversities } from "@/services/getAllUniversities";
import { FaUniversity } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const DashboardPage = async () => {
  const universities = await getAllUniversities();

  const countries = await getAllCountries();

  return (
    <main className="p-10">
      <div className="flex flex-wrap gap-5">
        {/* card  */}
        <div className="flex items-center gap-5 rounded-xl border p-5 shadow">
          <div className="inline-flex size-[50px] items-center justify-center rounded-full bg-primary p-2">
            <FaUniversity className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Total Universities</h4>
            <p className="font-medium">{universities.results.length}</p>
          </div>
        </div>
        {/* card  */}
        <div className="flex items-center gap-5 rounded-xl border p-5 shadow">
          <div className="inline-flex size-[50px] items-center justify-center rounded-full bg-primary p-2">
            <FaEarthAmericas className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Total Countries</h4>
            <p className="font-medium">{countries.results.length}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
