export type Root = {
  id: number;
  name: string;
  slug: string;
  logo: null | string;
  country: string;
  university_type: string;
  total_students: number;
  established: string;
  campus_location: string;
  accreditations: string;
  about_university: AboutUniversity;
  scholarship_offered: ScholarshipOffered[];
  programs_offered: ProgramsOffered[];
};

export type AboutUniversity = {
  id: number;
  content: Content[];
};

export type Content = {
  id: number;
  title: string;
  content: string;
};

export type ScholarshipOffered = {
  id: number;
  name: string;
  amount: number;
  eligibility: string;
  provider: string;
};

export type ProgramsOffered = {
  id: number;
  program_type: string;
  program_names: ProgramName[];
};

export type ProgramName = {
  id: number;
  program_name: string;
};
