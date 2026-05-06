import type { ElementType } from "react";

export interface TagAttributes {
  tagType: string;
  icon?: ElementType;
  backgroundColor?: string;
  textColor?: string;
}

export interface TagProps {
  tags: Array<TagAttributes>;
  size?: "sm" | "md" | "lg" | "xl";
}