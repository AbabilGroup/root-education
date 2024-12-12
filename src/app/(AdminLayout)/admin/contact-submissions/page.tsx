import ContactSubmissionsTable from "@/components/admin/pages/contact_submissions/ContactSubmissionsTable";

const ContactSubmissionsPage = () => {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-xl font-semibold">
        All contact form submission list
      </h2>
      <ContactSubmissionsTable />
    </main>
  );
};

export default ContactSubmissionsPage;
