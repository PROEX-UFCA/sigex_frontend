import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { CpuIcon, Drama, GraduationCap } from "lucide-react";

export interface TagAttributes {
  tagType: string;
  icon?: ElementType;
  backgroundColor?: string;
  textColor?: string;
}

interface TagProps {
  tags: Array<TagAttributes>;
  size?: "sm" | "md" | "lg";
}

export default function TagsArea({ tags, size = "md" }: TagProps) {
  const sizeStyles = {
    sm: {
      badge: "h-5 text-[10px] px-1.5 py-0 gap-1 rounded-md",
      icon: "w-3 h-3",
    },
    md: {
      badge: "h-6 text-xs px-2 py-0.5 gap-1.5 rounded-lg",
      icon: "w-3.5 h-3.5",
    },
    lg: {
      badge:
        "h-8 text-sm lg:text-base px-3 py-1 gap-2 rounded-xl font-semibold",
      icon: "w-4 h-4 lg:w-5 lg:h-5",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, _) => {
        let IconTag: ElementType | null = null;
        let bkgColor: string = "";
        let textColor: string = "";

        switch (tag.tagType) {
          case "Tecnologia":
            IconTag = CpuIcon;
            bkgColor = "bg-blue-100";
            textColor = "text-blue-600";
            break;
          case "Cultura":
            IconTag = Drama;
            bkgColor = "bg-amber-100";
            textColor = "text-amber-600";
            break;
          case "Ensino":
            IconTag = GraduationCap;
            bkgColor = "bg-green-100";
            textColor = "text-green-600";
            break;
          default:
            if (tag.icon) IconTag = tag.icon;
            if (tag.backgroundColor) bkgColor = tag.backgroundColor;
            if (tag.textColor) textColor = tag.textColor;
        }

        return (
          <Badge
            variant={"secondary"}
            className={`flex items-center border-none ${currentSize.badge} ${bkgColor} ${textColor}`}
          >
            {IconTag ? <IconTag className={currentSize.icon} /> : <></>}
            {tag.tagType}
          </Badge>
        );
      })}
    </div>
  );
}
