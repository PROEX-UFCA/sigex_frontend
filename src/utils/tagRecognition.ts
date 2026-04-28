interface TagsInterface {
  tagArray: Array<string>;
}

export default function recognizeTags({
  tagArray,
}: TagsInterface): Array<string> {
  const result: Array<string> = [];

  for (const tag in tagArray) {
    if (tag.match(/\bcultural?/i)) result.push("Cultura");
    if (tag.match(/tecnologia/i)) result.push("Tecnologia");
    if (tag.match(/comunica[cç][aã]o/i)) result.push("Comunicação");
    if (tag.match(/esport(ivo|iva|es?)/i)) result.push("Esportes");
    if (tag.match(/justi[cç]a/i)) result.push("Justiça");
    if (tag.match(/soci(al|edade)\b/i)) result.push("Sociedade");
    if (tag.match(/educa[cç][aã]o/i)) result.push("Educação");
    if (tag.match(/idiomas?/i)) result.push("Idiomas");
    if (tag.match(/artes?|art[ií]stic[oa]/i)) result.push("Artes");
    if (tag.match(/ambient(e|al)/i)) result.push("Ambiente");
    if (tag.match(/patrim[oô]ni(o|al)/i)) result.push("Patrimônio");
    if (tag.match(/sa[uú]de|sa[uú]d[aá]ve(l|is)/i)) result.push("Saúde");
    if (tag.match(/trabalho/i)) result.push("Trabalho");
  }

  return result;
}
