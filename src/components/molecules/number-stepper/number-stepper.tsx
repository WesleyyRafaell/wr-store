"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NumberStepper() {
  const [value, setValue] = useState(2);

  const decrement = () => setValue((v) => Math.max(0, v - 1));
  const increment = () => setValue((v) => v + 1);

  return (
    <div className="flex items-center justify-center rounded-lg border border-input bg-background p-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={decrement}
        className="text-red-500 hover:text-red-600"
      >
        –
      </Button>
      <span className="w-8 text-center text-lg">{value}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={increment}
        className="text-pink-500 hover:text-pink-600"
      >
        +
      </Button>
    </div>
  );
}
