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
// import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

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
    // <Toggle
    <Button
      className="flex-1 max-w-fit"
      onClick={() => setToggled(!toggled)}
    >
      {toggled ? <Check></Check> : null}
      {filterName}
    {/* </Toggle> */}
    </Button>
  );
}

function FilterTypes({ filterType, filters }: FilterAttributes) {
  return (
    <div className="flex flex-col max-h-52 overflow-y-auto gap-2 w-full">
      <h1 className="font-bold text-lg">{filterType}</h1>
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filtros</DialogTitle>
        </DialogHeader>
        <div className="max-h-72 overflow-y-auto no-scrollbar">
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
