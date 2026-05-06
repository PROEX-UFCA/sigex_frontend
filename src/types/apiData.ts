import type { Project } from "@/types/project";

interface PageURL {
  url?: string | null;
  label: string;
  active: boolean;
}

export interface APIData {
  current_page: number;
  data: Project[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PageURL[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: string | null;
  to: number;
  total: number;
}