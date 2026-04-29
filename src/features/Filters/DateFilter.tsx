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

export interface DateFilterProps {
  label: string;
  onDateChange: (date: Date | undefined) => void;
}

export default function DateFilter({ label, onDateChange }: DateFilterProps) {
  const [date, setDate] = useState<Date>();

  function handleSelect(date: Date | undefined) {
    setDate(date);
    onDateChange?.(date);
  }

  return (
    <Field>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            id="date-picker"
            className="justify-start"
          >
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
