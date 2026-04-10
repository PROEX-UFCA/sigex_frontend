import type { TagAttributes } from "@/components/Tags";

export interface ProjectDataValues {
  id: number | string;
  title: string;
  tags: TagAttributes[];
}