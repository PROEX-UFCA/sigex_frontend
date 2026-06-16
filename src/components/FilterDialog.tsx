import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { useAuth } from "@/contexts/AuthContext";

/** Um item de filtro por nome (categoria ou tipo de ação). */
interface FilterOption {
  filterName: string;
}

/** Props do botão toggle individual de filtro. */
interface Filter {
  filterName: string;
  isSelected: boolean;
  onToggle: (name: string) => void;
}

/** Entrada de um componente de filtro por data dentro de um grupo `FilterTypes`. */
interface DateComponentEntry {
  DateComponent: React.ComponentType<DateFilterProps>;
  label: string;
  onDateChange?: (date: Date | undefined) => void;
}

/** Props do grupo de filtros `FilterTypes`. */
interface FilterAttributes {
  filterType: string;
  filters?: Array<FilterOption>;
  selectedFilters: Array<string>;
  onToggle?: (name: string) => void;
  DateComponents?: DateComponentEntry[];
}

/**
 * Botão toggle de filtro individual.
 *
 * Exibe um checkmark quando selecionado e chama `onToggle` ao ser clicado,
 * passando o `filterName` como argumento.
 *
 * @param filterName - Rótulo e identificador do filtro.
 * @param isSelected - Se `true`, exibe o indicador de selecionado.
 * @param onToggle   - Callback chamado com o `filterName` ao clicar.
 */
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

/**
 * Grupo de filtros de um mesmo tipo (categoria, tipo de ação ou datas).
 *
 * Renderiza um cabeçalho com o nome do tipo e, abaixo, os filtros toggleáveis
 * e/ou os seletores de data.
 *
 * @param filterType      - Nome do grupo exibido como cabeçalho.
 * @param filters         - Lista de opções de filtro por nome (opcional).
 * @param selectedFilters - Filtros atualmente selecionados (para controlar estado ativo).
 * @param onToggle        - Callback de alternância de filtro por nome (opcional).
 * @param DateComponents  - Componentes de filtro por data (opcional).
 */
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

/**
 * Diálogo de filtros avançados para busca de projetos.
 *
 * Permite ao usuário selecionar categorias temáticas, tipos de ação e
 * um intervalo de datas. Ao aplicar, constrói uma query string e navega
 * para `/search` com os filtros como parâmetros de URL.
 *
 * Comportamentos:
 * - Se nenhum filtro estiver selecionado ao clicar em "Aplicar filtros",
 *   exibe um `AlertDialog` alertando o usuário.
 * - "Limpar filtros" reseta todos os estados e força remontagem do
 *   grupo de filtros via `resetKey`.
 *
 * Parâmetros de URL gerados:
 * - `area_tematica` — categorias separadas por vírgula.
 * - `tipo_acao` — tipos de ação separados por vírgula.
 * - `data_inicio` — data inicial no formato `yyyy-MM-dd`.
 * - `data_fim` — data final no formato `yyyy-MM-dd`.
 *
 * @example
 * <FilterDialog />
 */
export default function FilterDialog() {
  const [resetKey, setResetKey] = useState(0);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    categories: Array<string>;
    actionTypes: Array<string>;
    initialDate: Date | null;
    finalDate: Date | null;
    modality: Array<string>;
  }>({
    categories: [],
    actionTypes: [],
    initialDate: null,
    finalDate: null,
    modality: [],
  });

  const { role } = useAuth();

  const navigate = useNavigate();

  /** Retorna `true` se ao menos um filtro estiver selecionado. */
  function hasFiltersSelected() {
    return (
      selectedFilters.actionTypes.length > 0 ||
      selectedFilters.categories.length > 0 ||
      selectedFilters.finalDate !== null ||
      selectedFilters.initialDate !== null ||
      selectedFilters.modality.length > 0
    );
  }

  /** Reseta todos os filtros e força remontagem dos componentes de data. */
  function handleClear() {
    setResetKey((prev) => prev + 1);
    setSelectedFilters({
      actionTypes: [],
      categories: [],
      initialDate: null,
      finalDate: null,
      modality: [],
    });
  }

  /**
   * Valida os filtros selecionados e navega para a página de busca.
   * Exibe alerta se nenhum filtro estiver selecionado.
   */
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

    if (selectedFilters.modality.length > 0)
      params.set("modalidade", selectedFilters.modality.join(","));

    setOpen(false);
    navigate(`/search?${params.toString()}`);
  }

  /**
   * Alterna um filtro de texto (categoria ou tipo de ação) no estado.
   *
   * @param key  - A chave do estado a atualizar (`"categories"` ou `"actionTypes"`).
   * @param name - O nome do filtro a adicionar ou remover.
   */
  function toggleFilter(
    key: "categories" | "actionTypes" | "modality",
    name: string,
  ) {
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
            className="h-10 w-2/8 md:w-1/8 lg:w-1/10 xl:w-1/12 active:translate-y-1 transition-transform duration-100 ease-in-out"
          >
            <Funnel className="" />
            Filtros
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle className="text-xl">Filtros</DialogTitle>
            <DialogDescription>
              Selecione os filtros que deseja utilizar na sua busca
            </DialogDescription>
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
            {role === "Aluno" && (
              <>
                <FilterTypes
                  filterType="Modalidade"
                  filters={[
                    { filterName: "Fluxo Contínuo" },
                    { filterName: "Vinculada a Edital" },
                    { filterName: "UFCA Itinerante" },
                    { filterName: "PROPE" },
                    { filterName: "Ampla Concorrência" },
                  ]}
                  selectedFilters={selectedFilters.modality}
                  onToggle={(name) => toggleFilter("modality", name)}
                />
                <Separator className="my-2" />
              </>
            )}
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
              <AlertDialogTitle className="text-xl">
                Nenhum filtro selecionado
              </AlertDialogTitle>
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
