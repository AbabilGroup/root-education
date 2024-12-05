import AllCountryTable from "@/components/admin/pages/all_countries/AllCountryTable";
import { getAllCountries } from "@/services/getAllCountries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | All Countries",
};

const AllCountriesPage = async () => {
  const countries = await getAllCountries();
  console.log("🚀 ~ AllCountriesPage ~ countries:", countries);

  return (
    <main className="p-10">
      <AllCountryTable countries={countries} />
    </main>
  );
};

export default AllCountriesPage;
