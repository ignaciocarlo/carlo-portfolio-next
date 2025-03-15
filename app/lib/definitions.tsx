export type Description = {
  id: number;
  description: string;
}

export type Skill = {
  id: number;
  title: string;
  src: string;
  type: string;
}

export type Experience = {
  id: number;
  company_name: string;
  date_hired: Date;
  date_resigned: Date | null;
  is_current_company: boolean;
  descriptions: Description[];
}

export type Social = { 
  id: number;
  title: string;
  link: string;
  src: string;
}