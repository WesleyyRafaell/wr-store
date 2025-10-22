import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "secondary";
}

function Input({ className, type, variant = "default", ...props }: InputProps) {
  const baseStyles =
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

  const focusStyles =
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";
  const invalidStyles =
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

  const secondaryStyles =
    "focus-visible:border-yellow-400 focus-visible:ring-yellow-400/50 selection:bg-secondary text-white";

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        baseStyles,
        variant === "secondary" ? secondaryStyles : focusStyles,
        invalidStyles,
        className
      )}
      {...props}
    />
  );
}

export { Input };
