import type { Project } from "@/types/project";

export interface PageData {
  data: Project[];
  currentPage: number;
  lastPage: number;
}