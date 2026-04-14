import { useEffect } from "react";
import { useParams } from "react-router";

import { TriangleAlert } from "lucide-react";

import { searchProjectsByTitle } from "@/services/projectServices";

export default function SearchPage() {
  const { term } = useParams<{ term: string }>();

  useEffect(() => {
    searchProjectsByTitle(term ?? "");
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

  return <div></div>;
}
