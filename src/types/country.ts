export type Root = {
  id: number;
  box1: Box1[];
  whystudy: Whystudy[];
  costofliving: Costofliving[];
  jobopportunity: Jobopportunity[];
  scholarship: Scholarship[];
  application_procedures: ApplicationProcedure[];
  admission_requirments: AdmissionRequirment[];
  visaprocedures: Visaprocedure[];
  city: City[];
  faq: Faq[];
  country: string;
  slug: string;
  route_slug: string;
  flag: string;
  is_draft: boolean;
};

export type Box1 = {
  title: string;
  descriptions: Description[];
};

export type Description = {
  description: string;
};

export type Whystudy = {
  id: number;
  whystudylist: Whystudylist[];
  short_breaf: string;
};

export type Whystudylist = {
  title: string;
  content: string;
};

export type Costofliving = {
  short_breaf: string;
  list: List[];
  fees: Fee[];
};

export type List = {
  title: string;
  content: string;
  icon: string;
};

export type Fee = {
  title: string;
  range: string;
  icon: string;
};

export type Jobopportunity = {
  id: number;
  list: List2[];
  short_breaf: string;
};

export type List2 = {
  title: string;
  content: string;
  icon: string;
};

export type Scholarship = {
  id: number;
  scholarshiplist: Scholarshiplist[];
  short_breaf: string;
};

export type Scholarshiplist = {
  name: string;
  criteria: string;
  coverage: string;
  deadline: string;
  process: string;
};

export type ApplicationProcedure = {
  id: number;
  applicationprocedureslist: Applicationprocedureslist[];
  short_breaf: string;
};

export type Applicationprocedureslist = {
  title: string;
  content: string;
  icon: string;
};

export type AdmissionRequirment = {
  id: number;
  list: List3[];
  short_breaf: string;
};

export type List3 = {
  title: string;
  content: string;
  icon: string;
};

export type Visaprocedure = {
  id: number;
  list: List4[];
  short_breaf: string;
};

export type List4 = {
  title: string;
  content: string;
};

export type City = {
  id: number;
  logo: string;
  name: string;
};

export type Faq = {
  id: number;
  question: string;
  answer: string;
};
