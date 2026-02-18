"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOption } from "@/types";

type Props = {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
};

export default function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <label className="font-semibold">{selectLabel}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-56 bg-white">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
