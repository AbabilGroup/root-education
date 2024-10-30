import { apiUrl } from "@/secrets";
import { notFound } from "next/navigation";

export const getUniversityBySlug = async (slug: string) => {
  const res = await fetch(`${apiUrl}/university/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};
