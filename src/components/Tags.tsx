import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/utils/constants";
import type { TagProps } from "@/types";

/**
 * Renderiza um conjunto de badges de categorias temáticas de um projeto.
 *
 * Cada tag é exibida apenas uma vez (deduplicação por `tagType`).
 * O ícone, cor de fundo e cor do texto são obtidos de {@link CATEGORIES};
 * se a categoria não for encontrada, a tag é ignorada silenciosamente.
 *
 * @param tags - Array de {@link TagAttributes} a renderizar.
 * @param size - Tamanho visual dos badges (`"sm"` | `"md"` | `"lg"` | `"xl"`).
 *               Padrão: `"md"`.
 *
 * @example
 * <TagsArea tags={[{ tagType: "Tecnologia" }, { tagType: "Educação" }]} size="lg" />
 */
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
        "h-6 text-sm sm:text-sm md:text-md lg:text-md px-3 py-1 gap-2 rounded-xl font-semibold",
      icon: "w-4 h-4 lg:w-5 lg:h-5",
    },
    xl: {
      badge:
        "h-8 text-md sm:text-md md:text-base lg:text-lg px-3 py-1 gap-2 rounded-xl font-semibold",
      icon: "w-4 h-4 lg:w-5 lg:h-5",
    },
  };

  const currentSize = sizeStyles[size];

  /** Lista de `tagType` já renderizados, usada para deduplicação. */
  const existingTags: Array<string> = [];

  return (
    <div className="flex flex-wrap gap-2 z-10">
      {tags.map((tag, index) => {
        const category = CATEGORIES[tag.tagType as keyof typeof CATEGORIES];

        if (category && !existingTags.includes(tag.tagType)) {
          const IconTag: ElementType | null = category.icon ?? tag.icon ?? null;
          const bkgColor: string =
            category.backgroundColor ?? tag.backgroundColor ?? "";
          const textColor: string = category.textColor ?? tag.textColor ?? "";
          
          existingTags.push(tag.tagType);

          return (
            <Badge
              key={index}
              variant={"secondary"}
              className={`flex items-center border-none ${currentSize.badge} ${bkgColor} ${textColor}`}
            >
              {IconTag && <IconTag className={currentSize.icon} />}
              {tag.tagType}
            </Badge>
          );
        }
      })}
    </div>
  );
}
