export type University = {
  id?: number;

  name: string;

  slug: string;

  description: string;

  short_info: {
    country: string;
    university_type: string;
    total_students: number;
    launched: number;
  };

  photo: null | string | FileList;

  logo: null | string | FileList;

  video: null | string | FileList;

  thumbnail: null | string | FileList;

  about_university: AboutUniversity[];

  programs: {
    undergraduate_programs: UndergraduateProgram[];
    postgraduate_programs: PostgraduateProgram[];
    doctoral_programs: DoctoralProgram[];
  };

  scholarship: {
    short_description: string;
    table: Table[];
    notes: Note[];
  };

  application_guide: {
    short_description: string;
    guide_list: GuideList[];
    bottom_description: string;
  };
};

export type AboutUniversity = {
  title: string;
  description: string;
};

export type GuideList = {
  title: string;
  description: string;
};

export type UndergraduateProgram = {
  name: string;
};

export type PostgraduateProgram = {
  name: string;
};

export type DoctoralProgram = {
  name: string;
};

export type Table = {
  scholarship_name: string;
  amount: string;
  eligibility_criteria: string;
  provider: string;
};

export type Note = {
  title: string;
};
