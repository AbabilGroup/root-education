import { apiUrl } from "@/secrets";

export const getAllUniversities = async () => {
  const res = await fetch(`${apiUrl}/all_universities`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch universities");
  }

  return res.json();
};
