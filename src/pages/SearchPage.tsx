import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import { TriangleAlert } from "lucide-react";

import { searchProjectsByFilter } from "@/services/projectServices";
// import type { Projeto } from "@/types";

import Results from "@/features/SearchPage/Results";
import SearchPagination from "@/features/SearchPage/SearchPagination";

export default function SearchPage() {
  const { term } = useParams<{ term: string }>();
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchProjectsByFilter({
        titulo: term,
        area_tematica: searchParams.get("area_tematica") ?? undefined,
        tipo_acao: searchParams.get("tipo_acao") ?? undefined,
        data_inicio: searchParams.get("data_inicio") ?? undefined,
        data_fim: searchParams.get("data_fim") ?? undefined,
      });
      setResults(data);
      setLoading(false);
    };

    fetchData();
  }, [term, searchParams]);

  if (loading) {
    return <p className="text-2xl text-gray-400">Buscando resultados...</p>;
  }

  if (results.length == 0) {
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

  return (
    <div className="flex flex-col">
      <Results projetos={results}></Results>
      <SearchPagination></SearchPagination>
    </div>
  );
}
