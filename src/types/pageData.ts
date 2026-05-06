import type { Project } from "@/types/projeto";

export interface PageData {
  data: Project[];
  currentPage: number;
  lastPage: number;
}