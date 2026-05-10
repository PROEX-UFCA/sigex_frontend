import { useState } from "react";
import { useNavigate } from "react-router";

/**
 * Hook que gerencia o estado e o comportamento da barra de busca.
 *
 * Expõe o termo digitado, o setter desse termo e um handler para submissão
 * do formulário de busca. Ao submeter, navega para `/search/<term>` caso
 * o campo não esteja vazio.
 *
 * @returns
 * - `term` — Texto atual do campo de busca.
 * - `setTerm` — Setter direto do termo.
 * - `handleSearch` — Handler de `onSubmit` do formulário; previne o reload
 *   padrão e redireciona para a página de resultados.
 *
 * @example
 * const { term, setTerm, handleSearch } = useSearch();
 * <form onSubmit={handleSearch}>
 *   <input value={term} onChange={(e) => setTerm(e.target.value)} />
 * </form>
 */
export const useSearch = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (term) {
      navigate(`/search/${term}`);
    }
  };

  return { term, setTerm, handleSearch };
};
