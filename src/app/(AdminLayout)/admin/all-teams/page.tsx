import AllTeamsTable from "@/components/admin/pages/all_teams/AllTeamsTable";

const AllTeamsPage = () => {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-xl font-semibold">All team members list</h2>
      <AllTeamsTable />
    </main>
  );
};

export default AllTeamsPage;
