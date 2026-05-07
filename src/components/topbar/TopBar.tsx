import Logo from "@/assets/logo_proex_top.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useRef, useState } from "react";
import { Search } from "lucide-react";
import FilterDialog from "./FilterDialog";
import { Link } from "react-router";
import { useSearch } from "@/hooks/useSearch";
import { BREAKPOINTS } from "@/lib/breakpoints";

function ToggleableSearchBar({
  onActiveChange,
}: {
  onActiveChange: (value: boolean) => void;
}) {
  const { term, setTerm, handleSearch } = useSearch();
  const [active, setActive] = useState(false);
  const timerReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggle = (value: boolean) => {
    setActive(value);
    onActiveChange(value);
  };

  const clearTimer = () => {
    if (timerReference.current) {
      clearTimeout(timerReference.current);
      timerReference.current = null;
    }
  };

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
      {width >= BREAKPOINTS.md && width < BREAKPOINTS.lg && (
        <form className="w-3/5" onSubmit={handleSearch}>
          <Input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquise projetos ou áreas de atuação"
            className="border-gray-400 bg-gray-100 font-bold w-full h-10"
          ></Input>
        </form>
      )}
      {width >= BREAKPOINTS.lg && (
        <form className="w-2/5" onSubmit={handleSearch}>
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

export default function TopBar() {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <div className="flex justify-around rounded-b-2xl bg-[#532b1d] w-full items-center">
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
    </div>
  );
}
