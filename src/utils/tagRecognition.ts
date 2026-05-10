import type { TagAttributes } from "@/types";

/**
 * Converte um array de strings de área temática em objetos {@link TagAttributes}.
 *
 * Cada string é testada contra expressões regulares (case-insensitive) para
 * identificar as categorias reconhecidas pela aplicação. Uma mesma string pode
 * gerar múltiplas tags se corresponder a mais de uma categoria.
 *
 * @param tagArray - Array de strings vindas da API (campo `area_tematica`).
 * @returns Array de `TagAttributes` com o `tagType` correspondente a cada match.
 *
 * @example
 * recognizeTags(["Tecnologia da Informação"])
 * // → [{ tagType: "Tecnologia" }]
 *
 * recognizeTags(["Educação Cultural"])
 * // → [{ tagType: "Cultura" }, { tagType: "Educação" }]
 */
export default function recognizeTags(
  tagArray: string[],
): Array<TagAttributes> {
  const result: Array<TagAttributes> = [];

  for (const tag of tagArray) {
    if (/\bcultural?/i.test(tag)) result.push({ tagType: "Cultura" });
    if (/tecnologia/i.test(tag)) result.push({ tagType: "Tecnologia" });
    if (/comunica[cç][aã]o/i.test(tag)) result.push({ tagType: "Comunicação" });
    if (/justi[cç]a/i.test(tag)) result.push({ tagType: "Justiça" });
    if (/educa[cç][aã]o/i.test(tag)) result.push({ tagType: "Educação" });
    if (/ambient(e|al)/i.test(tag)) result.push({ tagType: "Ambiente" });
    if (/sa[uú]de|sa[uú]d[aá]ve(l|is)/i.test(tag))
      result.push({ tagType: "Saúde" });
    if (/trabalho/i.test(tag)) result.push({ tagType: "Trabalho" });
  }

  return result;
}
