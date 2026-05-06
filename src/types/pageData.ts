import type { Project } from "@/types/project";

export interface PageData {
  data: Project[];
  current_page: number;
  last_page: number;
}