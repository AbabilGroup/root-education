import EditStudyCountryForm from "@/components/admin/pages/edit_study_country/EditStudyCountryForm";
import { getCountryBySlug } from "@/services/getCountryBySlug";
import { Study_Country } from "@/types/country";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Edit Study Country",
};

const EditStudyCountry = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const country: Study_Country = await getCountryBySlug(slug);

  return (
    <main className="p-10">
      <h1 className="text-2xl">
        Edit <span className="font-bold">{country.country}</span> country
        information
      </h1>

      <EditStudyCountryForm country={country} />
    </main>
  );
};

export default EditStudyCountry;
