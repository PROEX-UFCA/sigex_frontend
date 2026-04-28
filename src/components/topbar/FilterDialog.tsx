import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Check, Funnel } from "lucide-react";

import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";

interface Filter {
  filterName: string;
}

interface FilterAttributes {
  filterType: string;
  filters: Array<Filter>;
}

function TogglableButton({ filterName }: Filter) {
  const [toggled, setToggled] = useState(false);

  return (
    <Toggle
      variant={"outline"}
      aria-pressed={toggled}
      onClick={() => setToggled(!toggled)}
      className="my-1"
    >
      {toggled ? <Check></Check> : null}
      {filterName}
    </Toggle>
  );
}

function FilterTypes({ filterType, filters }: FilterAttributes) {
  return (
    <div className="flex flex-col overflow-y-auto gap-2 w-full no-scrollbar">
      <h1 className="font-bold text-xl">{filterType}</h1>
      <div className="flex flex-wrap gap-x-2 w-full">
        {filters.map((filter, _) => (
          <TogglableButton filterName={filter.filterName}></TogglableButton>
        ))}
      </div>
    </div>
  );
}

export default function FilterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="h-10 sm:w-10 md:w-20 lg:w-30">
          <Funnel className="" />
          Filtros
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-xl">Filtros</DialogTitle>
        </DialogHeader>
        <div className="max-h-72 overflow-y-auto no-scrollbar">
          <FilterTypes
            filterType="Categoria"
            filters={[
              { filterName: "Comunicação" },
              { filterName: "Esportes" },
              { filterName: "Sociedade" },
              { filterName: "Cultura" },
              { filterName: "Justiça" },
              { filterName: "Educação" },
              { filterName: "Idiomas" },
              { filterName: "Artes" },
              { filterName: "Meio Ambiente" },
              { filterName: "Patrimônio" },
              { filterName: "Saúde" },
              { filterName: "Tecnologia" },
              { filterName: "Trabalho" },
            ]}
          />
          <Separator className="my-2" />
          <FilterTypes
            filterType="Tipo de Ação"
            filters={[
              { filterName: "Curso" },
              { filterName: "Evento" },
              { filterName: "Prestação de Serviços" },
              { filterName: "Produto" },
              { filterName: "Programa" },
              { filterName: "Projeto" },
            ]}
          />
          <Separator className="my-2" />
          <FilterTypes
            filterType="Filtro"
            filters={[
              { filterName: "Categoria 1" },
              { filterName: "Categoria 2" },
              { filterName: "Categoria 2" },
              { filterName: "2" },
              { filterName: "Categoria 1" },
              { filterName: "Categoria 2" },
              { filterName: "2" },
            ]}
          />
        </div>
        <DialogFooter className="flex flex-row sm:justify-center gap-3 mx-1">
          <Button variant={"destructive"}>Limpar filtros</Button>
          <Button variant={"outline"}>Aplicar filtros</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
