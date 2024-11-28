import { apiUrl } from "@/secrets";

export const getAllUniversities = async (searchParams = {}) => {
  // Construct the query string from searchParams
  const queryString = new URLSearchParams(searchParams).toString();

  // Append the query string to the API URL
  const url = `${apiUrl}/all_university${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch universities");
  }

  return res.json();
};
