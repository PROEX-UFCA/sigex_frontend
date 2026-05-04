import Logo from "@/assets/logo_ufca_white.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useState } from "react";
import { Search } from "lucide-react";
import FilterDialog from "./FilterDialog";
import { Link } from "react-router";
import { useSearch } from "@/hooks/useSearch";
import { BREAKPOINTS } from "@/lib/breakpoints";

function ToggleableSearchBar() {
  const { term, setTerm, handleSearch } = useSearch();
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex flex-row justify-end w-full gap-2"
    >
      {active ? (
        <div className="flex w-full gap-2">
          <form className="w-5/6" onSubmit={handleSearch}>
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
          onClick={() => setActive(!active)}
        >
          <Search />
          Buscar
        </Button>
      )}
    </div>
  );
}

function SearchArea() {
  const { term, setTerm, handleSearch } = useSearch();

  const { width } = useScreenSize();

  return (
    <div className="flex justify-end w-full m-4 gap-3">
      {width < BREAKPOINTS.md && <ToggleableSearchBar></ToggleableSearchBar>}
      {width >= BREAKPOINTS.md && width < BREAKPOINTS.lg && (
        <Input
          placeholder="Pesquise projetos ou áreas de atuação"
          className="border-gray-400 bg-gray-100 font-bold w-3/5 h-10"
        ></Input>
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
  return (
    <div className="flex justify-around rounded-b-2xl bg-[#532b1d] w-full items-center">
      <Link to={"/"} className="cursor-pointer hover:opacity-85">
        <img src={Logo} alt="Logo UFCA" className="h-12 m-3" />
      </Link>
      <SearchArea></SearchArea>
    </div>
  );
}
