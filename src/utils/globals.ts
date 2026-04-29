import type { TagAttributes } from "@/components/Tags";

export interface ProjectProps {
  id: string;
  title: string;
  tags: TagAttributes[];
  description?: string;
  center?: boolean;
}