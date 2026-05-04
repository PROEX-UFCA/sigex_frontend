import SmallProject from "@/components/SmallProject";
import type { Projeto } from "@/types";
import recognizeTags from "@/utils/tagRecognition";

interface ResultsData {
  projetos: Projeto[];
}

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
