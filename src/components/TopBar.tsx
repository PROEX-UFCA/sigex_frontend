import Logo from "/logo_proex_top.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FilterDialog from "@/components/FilterDialog";
import SideMenu from "@/components/MenuToggle";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useSearch } from "@/hooks/useSearch";
import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router";
import { BREAKPOINTS } from "@/lib/breakpoints";

/**
 * Barra de busca expansível para dispositivos móveis (largura < `md`).
 *
 * Por padrão exibe apenas um botão de busca. Ao ser clicado, expande-se
 * mostrando o campo de texto e o botão de filtros. Após 5 segundos de
 * inatividade (sem movimento de mouse ou digitação), retrai automaticamente.
 *
 * @param onActiveChange - Callback chamado sempre que o estado ativo/inativo muda.
 *                         Usado pela `TopBar` para ocultar o logo enquanto a busca está aberta.
 */
function ToggleableSearchBar({
  onActiveChange,
}: {
  onActiveChange: (value: boolean) => void;
}) {
  const { term, setTerm, handleSearch } = useSearch();
  const [active, setActive] = useState(false);
  const timerReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Altera o estado de visibilidade e notifica o pai. */
  const toggle = (value: boolean) => {
    setActive(value);
    onActiveChange(value);
  };

  /** Cancela o timer de inatividade em curso. */
  const clearTimer = () => {
    if (timerReference.current) {
      clearTimeout(timerReference.current);
      timerReference.current = null;
    }
  };

  /**
   * Inicia (ou reinicia) o timer de 5 s.
   * Quando expira, retrai a barra de busca.
   */
  const startIdleTimer = () => {
    clearTimer();
    timerReference.current = setTimeout(() => {
      toggle(false);
    }, 5000);
  };

  return (
    <div
      className="flex flex-row justify-end w-full gap-2"
      onMouseMove={startIdleTimer}
      onKeyDown={startIdleTimer}
      onFocus={clearTimer}
      onBlur={startIdleTimer}
    >
      {active ? (
        <div className="flex w-full gap-2">
          <form className="max-md:w-6/8 md:w-5/6" onSubmit={handleSearch}>
            <Input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Pesquise..."
              className="border-gray-400 bg-gray-100 font-bold w-full h-10"
            ></Input>
          </form>
          <FilterDialog></FilterDialog>
        </div>
      ) : (
        <Button
          className="h-10"
          variant={"secondary"}
          onClick={() => {
            toggle(true);
            startIdleTimer();
          }}
        >
          <Search />
          Buscar
        </Button>
      )}
    </div>
  );
}

/**
 * Área de busca da TopBar, responsiva.
 *
 * - Em telas menores que `md`: usa {@link ToggleableSearchBar}.
 * - Em telas `md` ou maiores: exibe campo de texto e filtros diretamente.
 *
 * @param onSearchActive - Callback que informa à `TopBar` se a busca está expandida,
 *                         permitindo ocultar o logo em telas pequenas.
 */
function SearchArea({
  onSearchActive,
}: {
  onSearchActive: (active: boolean) => void;
}) {
  const { term, setTerm, handleSearch } = useSearch();

  const { width } = useScreenSize();

  return (
    <div className="flex justify-end w-full m-4 gap-3">
      {width < BREAKPOINTS.md && (
        <ToggleableSearchBar
          onActiveChange={onSearchActive}
        ></ToggleableSearchBar>
      )}
      {width >= BREAKPOINTS.md && (
        <form className="max-lg:w-3/5 lg:w-2/5" onSubmit={handleSearch}>
          <Input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquise projetos ou áreas de atuação"
            className="border-gray-400 bg-gray-100 font-bold w-full h-10"
          ></Input>
        </form>
      )}
      {width >= BREAKPOINTS.md && <FilterDialog></FilterDialog>}
    </div>
  );
}

/**
 * Barra de navegação superior da aplicação.
 *
 * Contém:
 * - Logo da PROEX (link para `/`) — ocultado em mobile quando a busca está ativa.
 * - {@link SearchArea} — campo de busca responsivo com filtros.
 * - {@link SideMenu} — menu lateral hambúrguer.
 *
 * @example
 * <TopBar />
 */
export default function TopBar() {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <div className="flex justify-around rounded-b-2xl bg-[#532b1d] w-full items-center px-3">
      {!searchActive && (
        <Link
          to={"/"}
          className="cursor-pointer hover:opacity-85 active:opacity-70 active:translate-y-1 transition-transform duration-100 ease-in-out"
        >
          <img
            src={Logo}
            alt="Logo UFCA"
            className="max-md:h-16 md:max-2xl:h-14 2xl:h-16 max-md:mx-3 md:m-3 object-contain"
          />
        </Link>
      )}
      <SearchArea onSearchActive={setSearchActive}></SearchArea>
      <SideMenu></SideMenu>
    </div>
  );
}
