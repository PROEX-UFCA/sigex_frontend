import SmallProject from "@/components/SmallProject";
import type { Project } from "@/types";
import recognizeTags from "@/utils/tagRecognition";

/** Props do componente {@link Results}. */
interface ResultsData {
  projetos: Project[];
}

/**
 * Grade responsiva de resultados de busca.
 *
 * Renderiza cada projeto como um {@link SmallProject} em uma grade CSS:
 * - 2 colunas em telas menores que `md`
 * - 3 colunas entre `md` e `lg`
 * - 4 colunas em `lg` ou maior
 *
 * @param projetos - Array de projetos retornados pela busca.
 *
 * @example
 * <Results projetos={searchResults} />
 */
export default function Results({ projetos }: ResultsData) {
  return (
    <div className="grid max-md:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {projetos.map((projeto) => {
        return (
          <SmallProject
            key={projeto.id}
            id={projeto.id}
            title={projeto.titulo}
            tags={recognizeTags([projeto.area_tematica])}
          />
        );
      })}
    </div>
  );
}
