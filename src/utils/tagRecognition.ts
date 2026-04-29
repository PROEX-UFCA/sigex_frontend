import type { TagAttributes } from "@/components/Tags";

export default function recognizeTags(
  tagArray: string[],
): Array<TagAttributes> {
  const result: Array<TagAttributes> = [];

  for (const tag of tagArray) {
    // console.log(tag);
    if (/\bcultural?/i.test(tag)) result.push({ tagType: "Cultura" });
    if (/tecnologia/i.test(tag)) result.push({ tagType: "Tecnologia" });
    if (/comunica[cç][aã]o/i.test(tag)) result.push({ tagType: "Comunicação" });
    if (/justi[cç]a/i.test(tag)) result.push({ tagType: "Justiça" });
    if (/educa[cç][aã]o/i.test(tag)) result.push({ tagType: "Educação" });
    if (/ambient(e|al)/i.test(tag)) result.push({ tagType: "Ambiente" });
    if (/sa[uú]de|sa[uú]d[aá]ve(l|is)/i.test(tag))
      result.push({ tagType: "Saúde" });
    if (/trabalho/i.test(tag)) result.push({ tagType: "Trabalho" });
    // if (/esport(ivo|iva|es?)/i.test(tag)) result.push({ tagType: "Esportes" });
    // if (/soci(al|edade)\b/i.test(tag)) result.push({ tagType: "Sociedade" });
    // if (/idiomas?/i.test(tag)) result.push({ tagType: "Idiomas" });
    // if (/artes?|art[ií]stic[oa]/i.test(tag)) result.push({ tagType: "Artes" });
    // if (/patrim[oô]ni(o|al)/i.test(tag)) result.push({ tagType: "Patrimônio" });
  }

  return result;
}
