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
import { Toggle } from "@/components/ui/toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Check, Funnel } from "lucide-react";

import { useState } from "react";

import DateFilter, {
  type DateFilterProps,
} from "@/features/Filters/DateFilter";
import { format } from "date-fns";
import { useNavigate } from "react-router";

interface FilterOption {
  filterName: string;
}

interface Filter {
  filterName: string;
  isSelected: boolean;
  onToggle: (name: string) => void;
}

interface DateComponentEntry {
  DateComponent: React.ComponentType<DateFilterProps>;
  label: string;
  onDateChange?: (date: Date | undefined) => void;
}

interface FilterAttributes {
  filterType: string;
  filters?: Array<FilterOption>;
  selectedFilters: Array<string>;
  onToggle?: (name: string) => void;
  DateComponents?: DateComponentEntry[];
}

function TogglableButton({ filterName, isSelected, onToggle }: Filter) {
  return (
    <Toggle
      variant={"outline"}
      aria-pressed={isSelected}
      onClick={() => onToggle(filterName)}
      className="my-1"
    >
      {isSelected ? <Check></Check> : null}
      {filterName}
    </Toggle>
  );
}

function FilterTypes({
  filterType,
  filters,
  selectedFilters = [],
  onToggle,
  DateComponents,
}: FilterAttributes) {
  return (
    <div className="flex flex-col overflow-y-auto gap-2 w-full no-scrollbar">
      <h1 className="font-bold text-xl">{filterType}</h1>
      <div className="flex flex-wrap gap-x-2 w-full">
        {filters ? (
          filters.map((filter, index) => (
            <TogglableButton
              key={index}
              filterName={filter.filterName}
              isSelected={selectedFilters.includes(filter.filterName)}
              onToggle={onToggle!}
            ></TogglableButton>
          ))
        ) : (
          <></>
        )}
        <div className="flex flex-row w-5/6 mx-auto gap-x-12">
          {DateComponents?.map((DateComponent, index) => (
            <DateComponent.DateComponent
              key={index}
              label={DateComponent.label}
              onDateChange={DateComponent.onDateChange!}
            ></DateComponent.DateComponent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FilterDialog() {
  const [resetKey, setResetKey] = useState(0);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    categories: Array<string>;
    actionTypes: Array<string>;
    initialDate: Date | null;
    finalDate: Date | null;
  }>({
    categories: [],
    actionTypes: [],
    initialDate: null,
    finalDate: null,
  });
  const navigate = useNavigate();

  function hasFiltersSelected() {
    return (
      selectedFilters.actionTypes.length > 0 ||
      selectedFilters.categories.length > 0 ||
      selectedFilters.finalDate !== null ||
      selectedFilters.initialDate !== null
    );
  }

  function handleClear() {
    setResetKey((prev) => prev + 1);
    setSelectedFilters({
      actionTypes: [],
      categories: [],
      initialDate: null,
      finalDate: null,
    });
  }

  function handleApplyFilters() {
    if (!hasFiltersSelected()) {
      setShowAlert(true);
      return;
    }

    const params = new URLSearchParams();

    if (selectedFilters.categories.length > 0)
      params.set("area_tematica", selectedFilters.categories.join(","));

    if (selectedFilters.actionTypes.length > 0)
      params.set("tipo_acao", selectedFilters.actionTypes.join(","));

    if (selectedFilters.initialDate)
      params.set(
        "data_inicio",
        format(selectedFilters.initialDate, "yyyy-MM-dd"),
      );

    if (selectedFilters.finalDate)
      params.set("data_fim", format(selectedFilters.finalDate, "yyyy-MM-dd"));

    setOpen(false);
    navigate(`/search?${params.toString()}`);
  }

  function toggleFilter(key: "categories" | "actionTypes", name: string) {
    setSelectedFilters((previousFilters) => {
      const currentFilterList = previousFilters[key];

      const isFilterActive = currentFilterList.includes(name);

      const updatedList = isFilterActive
        ? currentFilterList.filter((item) => item !== name)
        : [...currentFilterList, name];

      return {
        ...previousFilters,
        [key]: updatedList,
      };
    });
  }

  return (
    <div className="contents">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"secondary"}
            className="h-10 w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12"
          >
            <Funnel className="" />
            Filtros
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle className="text-xl">Filtros</DialogTitle>
          </DialogHeader>
          <div key={resetKey} className="max-h-72 overflow-y-auto no-scrollbar">
            <FilterTypes
              filterType="Categoria"
              filters={[
                { filterName: "Comunicação" },
                { filterName: "Cultura" },
                { filterName: "Justiça" },
                { filterName: "Educação" },
                { filterName: "Meio Ambiente" },
                { filterName: "Saúde" },
                { filterName: "Tecnologia" },
                { filterName: "Trabalho" },
                // { filterName: "Esportes" },
                // { filterName: "Sociedade" },
                // { filterName: "Idiomas" },
                // { filterName: "Artes" },
                // { filterName: "Patrimônio" },
              ]}
              selectedFilters={selectedFilters.categories}
              onToggle={(name) => toggleFilter("categories", name)}
            />
            <Separator className="my-2" />
            <FilterTypes
              filterType="Tipo de Ação"
              filters={[
                { filterName: "Curso" },
                { filterName: "Evento" },
                { filterName: "Prestação de Serviços" },
                { filterName: "Programa" },
                { filterName: "Projeto" },
              ]}
              selectedFilters={selectedFilters.actionTypes}
              onToggle={(name) => toggleFilter("actionTypes", name)}
            />
            <Separator className="my-2" />
            <FilterTypes
              filterType="Duração da Ação"
              DateComponents={[
                {
                  DateComponent: DateFilter,
                  label: "Data inicial",
                  onDateChange: (date) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      initialDate: date ?? null,
                    })),
                },
                {
                  DateComponent: DateFilter,
                  label: "Data final",
                  onDateChange: (date) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      finalDate: date ?? null,
                    })),
                },
              ]}
              selectedFilters={[]}
            />
          </div>
          <DialogFooter className="flex flex-row sm:justify-center gap-3 mx-1">
            <Button variant={"destructive"} onClick={handleClear}>
              Limpar filtros
            </Button>
            <Button variant={"outline"} onClick={handleApplyFilters}>
              Aplicar filtros
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {hasFiltersSelected() ? (
        <></>
      ) : (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">Nenhum filtro selecionado</AlertDialogTitle>
              <AlertDialogDescription className="text-lg">
                Selecione ao menos um filtro antes de aplicar a busca.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowAlert(false)}>
                Entendido
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
