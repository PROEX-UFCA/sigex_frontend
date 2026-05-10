import type { ElementType } from "react";

/**
 * Atributos visuais de uma tag de categoria de projeto.
 *
 * @property tagType         - Nome da categoria (ex.: `"Tecnologia"`). Deve
 *                             coincidir com uma chave de {@link CATEGORIES}.
 * @property icon            - Componente de ícone React (opcional). Sobrescrito
 *                             pelo ícone definido em `CATEGORIES` quando existir.
 * @property backgroundColor - Classe Tailwind de cor de fundo (opcional).
 * @property textColor       - Classe Tailwind de cor do texto (opcional).
 */
export interface TagAttributes {
  tagType: string;
  icon?: ElementType;
  backgroundColor?: string;
  textColor?: string;
}

/**
 * Props do componente {@link TagsArea}.
 *
 * @property tags - Array de atributos de tags a renderizar.
 * @property size - Tamanho visual dos badges. Padrão: `"md"`.
 */
export interface TagProps {
  tags: Array<TagAttributes>;
  size?: "sm" | "md" | "lg" | "xl";
}