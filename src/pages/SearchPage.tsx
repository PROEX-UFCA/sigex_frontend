import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { TriangleAlert } from "lucide-react";

import { searchProjectsByTitle } from "@/services/projectServices";
import type { Projeto } from "@/types";

export default function SearchPage() {
  const { term } = useParams<{ term: string }>();
  const [results, setResults] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchProjectsByTitle(term ?? "");
      setResults(data.data);
      setLoading(false);
    };

    fetchData();
  }, [term]);

  if (!term) {
    return (
      <div className="flex flex-col w-2/3 self-center gap-4">
        <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
          <TriangleAlert className="scale-400 mb-10 self-center" />
          <p className="text-4xl">
            Não foi possível encontrar nenhum resultado com os termos procurados
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <p className="text-2xl text-gray-400">Buscando resultados...</p>;
  }

  return (
    <div>
      {results.map((projeto) => (
        <div>{projeto.titulo}</div>
      ))}
    </div>
  );
}
