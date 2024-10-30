import AddStudyCountryForm from "@/components/admin/pages/add_study_country/AddStudyCountryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Add Study Country",
};

const AddStudyCountryPage = () => {
  return (
    <main className="m-10">
      <AddStudyCountryForm />
    </main>
  );
};

export default AddStudyCountryPage;
