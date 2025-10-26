"use client";

import { Card } from "@/components/ui/card";
import { useProductsStore } from "@/store/products";
import { formatCurrency } from "@/utils/currency";

import Link from "next/link";

interface ITotalPriceCardProps {
  children: React.ReactNode;
}

export const TotalPriceCard = ({ children }: ITotalPriceCardProps) => {
  const { products } = useProductsStore();

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const discounts = products.reduce((acc, product) => {
    return acc + product.oldPrice === 0 ? 0 : (product.oldPrice - product.price) * product.quantity;
  }, 0);

  return (
    <Card className="px-10 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="text-gray-600 text-sm">Subtotal</p>
          <p className="font-bold text-sm text-gray-600">{formatCurrency(total)}</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="text-gray-600 text-sm">Descontos</p>
          <p className="font-bold text-sm text-gray-600">{formatCurrency(discounts)}</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="font-bold text-primary text-base">Total</p>
          <p className="font-bold text-base text-primary">{formatCurrency(total - discounts)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        {children}
        <Link href="/home">
          <p className="text-gray-500 underline text-sm">Adicionar mais produtos</p>
        </Link>
      </div>
    </Card>
  );
};
