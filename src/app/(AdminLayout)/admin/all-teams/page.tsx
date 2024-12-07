import AllTeamsTable from "@/components/admin/pages/all_teams/AllTeamsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Admin | All Teams",
};

const AllTeamsPage = () => {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-xl font-semibold">All team members list</h2>
      <AllTeamsTable />
    </main>
  );
};

export default AllTeamsPage;
