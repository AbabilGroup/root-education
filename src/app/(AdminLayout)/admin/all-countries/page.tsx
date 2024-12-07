import AllCountryTable from "@/components/admin/pages/all_countries/AllCountryTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | All Countries",
};

const AllCountriesPage = () => {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-xl font-semibold">All country list</h2>
      <AllCountryTable />
    </main>
  );
};

export default AllCountriesPage;
