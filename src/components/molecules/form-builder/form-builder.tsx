"use client";
import {
  Controller,
  Control,
  FieldErrors,
  Path,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FieldConfig<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: "input" | "select" | "radio";
  width?: "full" | "half";
  placeholder?: string;
  options?: { label: string; value: string }[];
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormBuilderProps<T extends FieldValues> {
  fields: FieldConfig<T>[];
  control: Control<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  className?: string;
}

export function FormBuilder<T extends FieldValues>({
  fields,
  control,
  register,
  errors,
  className,
}: FormBuilderProps<T>) {
  return (
    <div className={`flex items-center flex-wrap gap-4 justify-between ${className ?? ""}`}>
      {fields.map((field) => (
        <Field
          key={String(field.name)}
          className={field?.width === "half" ? "w-full md:w-9/20" : "w-full"}
        >
          <FieldLabel htmlFor={String(field.name)}>{field.label}</FieldLabel>

          {field.type === "input" && (
            <Input
              {...register(field.name)}
              id={String(field.name)}
              placeholder={field.placeholder}
              type="text"
              onChange={field.change}
            />
          )}

          {field.type === "select" && (
            <Controller
              name={field.name}
              control={control}
              render={({ field: rhfField }) => (
                <Select onValueChange={rhfField.onChange} value={rhfField.value}>
                  <SelectTrigger id={String(field.name)}>
                    <SelectValue placeholder={field.placeholder ?? "Selecione"} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          )}

          {field.type === "radio" && (
            <Controller
              name={field.name}
              control={control}
              render={({ field: rhfField }) => (
                <RadioGroup
                  onValueChange={rhfField.onChange}
                  value={rhfField.value}
                  defaultValue="default"
                >
                  {field.options?.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-2">
                      <RadioGroupItem value={opt.value} id={`${field.name}-${opt.value}`} />
                      <Label htmlFor={`${field.name}-${opt.value}`}>{opt.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
          )}

          {errors?.[field.name] && "message" in (errors[field.name] as object) && (
            <p className="text-xs text-orange-500">
              {String((errors[field.name] as { message?: string }).message)}
            </p>
          )}
        </Field>
      ))}
    </div>
  );
}
