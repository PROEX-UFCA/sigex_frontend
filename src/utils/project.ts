import type { TagAttributes } from "@/types/tags";

export interface ProjectImages {
  imageURL: string[];
}

export interface ContactInfo {
  phoneNum: string;
  email: string;
  location?: string;
}

export interface ProjectData {
  images?: ProjectImages;
  tags: TagAttributes[];
  title: string;
  description: string;
  contact: ContactInfo;
}
