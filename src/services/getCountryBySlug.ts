import { apiUrl } from "@/secrets";
import { notFound } from "next/navigation";

export const getCountryBySlug = async (slug: string) => {
  const res = await fetch(`${apiUrl}/study_country/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};
