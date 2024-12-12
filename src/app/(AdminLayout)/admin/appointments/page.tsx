import AppointmentsTable from "@/components/admin/pages/appointments/AppointmentsTable";

const AppointmentsPage = () => {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-xl font-semibold">All appointments list</h2>
      <AppointmentsTable />
    </main>
  );
};

export default AppointmentsPage;
