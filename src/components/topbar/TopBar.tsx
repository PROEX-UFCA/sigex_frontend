import Logo from "@/assets/logo_ufca_white.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { getWindowSize } from "@/hooks/screen";
import { BREAKPOINTS } from "@/utils/constants";
import { useState } from "react";
import { Search } from "lucide-react";
import FilterDialog from "./FilterDialog";
import { Link } from "react-router";
import { useSearch } from "@/hooks/useSearch";

function ToggleableSearchBar() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex flex-row justify-end w-full"
      onBlur={() => setActive(false)}
    >
      <Button variant={"secondary"} onClick={() => setActive(!active)}>
        <Search />
        Buscar
      </Button>
    </div>
  );
}

function SearchArea() {
  const { term, setTerm, handleSearch } = useSearch();

  const { width } = getWindowSize();

  const isMobile: boolean = width < BREAKPOINTS.small;
  const isTablet: boolean =
    width >= BREAKPOINTS.small && width < BREAKPOINTS.medium;
  const isDesktop: boolean = width >= BREAKPOINTS.medium;

  return (
    <div className="flex justify-end w-full m-4 gap-3">
      {isMobile && <ToggleableSearchBar></ToggleableSearchBar>}
      {isTablet && (
        <Input
          placeholder="Pesquise projetos ou áreas de atuação"
          className="border-gray-400 bg-gray-100 font-bold w-3/5 h-10"
        ></Input>
      )}
      {isDesktop && (
        <form className="w-2/5" onSubmit={handleSearch}>
          <Input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquise projetos ou áreas de atuação"
            className="border-gray-400 bg-gray-100 font-bold w-full h-10"
          ></Input>
        </form>
      )}
      {(isTablet || isDesktop) && <FilterDialog></FilterDialog>}
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
