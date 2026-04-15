import SmallProject from "@/components/SmallProject";
import type { Projeto } from "@/types";

interface ResultsData {
  projetos: Projeto[];
}

export default function Results({ projetos }: ResultsData) {
  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      {projetos.map((projeto) => (
        <SmallProject
          id={projeto.id}
          title={projeto.titulo}
          tags={[{ tagType: "Cultura" }]}
        />
      ))}
    </div>
  );
}
