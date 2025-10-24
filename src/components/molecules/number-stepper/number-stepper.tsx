"use client";

import { Button } from "@/components/ui/button";
import { useProductsStore } from "@/store/products";
import { useState } from "react";

interface NumberStepperProps {
  id: number;
  productQuantity?: number;
}

export function NumberStepper({ productQuantity, id }: NumberStepperProps) {
  const { setProducts, products } = useProductsStore();
  const [value, setValue] = useState(productQuantity || 1);

  const updateProductQuantity = (id: number, operator: string) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        let newQuantity = product.quantity;

        if (operator === "+") {
          newQuantity += 1;
        } else if (operator === "-" && product.quantity > 1) {
          newQuantity -= 1;
        }

        if (newQuantity === product.quantity) {
          return product;
        }

        setValue(newQuantity);

        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setProducts(newProducts);
  };

  const decrement = () => updateProductQuantity(id, "-");

  const increment = () => updateProductQuantity(id, "+");

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
