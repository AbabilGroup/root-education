import AllCountryTable from "@/components/admin/pages/all_countries/AllCountryTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Add Study Country",
};

const EditStudyCountryPage = () => {
  return (
    <main className="p-10">
      <AllCountryTable />
    </main>
  );
};

export default EditStudyCountryPage;
