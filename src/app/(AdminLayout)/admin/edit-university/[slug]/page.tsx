import EditUniversityForm from "@/components/admin/pages/edit_university/EditUniversityForm";
import { getUniversityBySlug } from "@/services/getUniversityBySlug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Edit University",
};

const EditUniversityPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const university = await getUniversityBySlug(slug);


  return (
    <main className="p-10">
      <h1 className="mb-10 text-2xl">
        Edit <span className="font-bold">{university.name}</span> information
      </h1>

      <EditUniversityForm university={university} />
    </main>
  );
};

export default EditUniversityPage;
