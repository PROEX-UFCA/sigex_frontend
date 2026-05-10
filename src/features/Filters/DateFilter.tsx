import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

/** Props do componente {@link DateFilter}. */
export interface DateFilterProps {
  /** Texto exibido no botão quando nenhuma data está selecionada. */
  label: string;
  /** Callback chamado sempre que o usuário seleciona ou limpa uma data. */
  onDateChange: (date: Date | undefined) => void;
}

/**
 * Seletor de data individual usando um Popover com Calendário.
 *
 * Exibe um botão que, ao ser clicado, abre um popover com o componente
 * `Calendar`. Quando uma data é selecionada, o botão passa a exibir a
 * data no formato `yyyy-MM-dd` e o callback `onDateChange` é invocado.
 *
 * @param label        - Texto placeholder exibido enquanto nenhuma data foi escolhida.
 * @param onDateChange - Função chamada com a nova data (ou `undefined` ao limpar).
 *
 * @example
 * <DateFilter
 *   label="Data inicial"
 *   onDateChange={(date) => setStartDate(date ?? null)}
 * />
 */
export default function DateFilter({ label, onDateChange }: DateFilterProps) {
  const [date, setDate] = useState<Date>();

  /** Atualiza o estado local e notifica o componente pai. */
  function handleSelect(date: Date | undefined) {
    setDate(date);
    onDateChange?.(date);
  }

  return (
    <Field>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="justify-start">
            {date ? format(date, "yyyy-MM-dd") : <span>{label}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            defaultMonth={date}
          ></Calendar>
        </PopoverContent>
      </Popover>
    </Field>
  );
}
