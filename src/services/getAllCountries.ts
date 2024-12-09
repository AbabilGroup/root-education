import { apiUrl } from "@/secrets";

export const getAllCountries = async () => {
  const res = await fetch(`${apiUrl}/study_country/`);

  if (!res.ok) {
    throw new Error("Failed to fetch countries ");
  }

  return res.json();
};
