"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const TotalPriceCard = () => {
  return (
    <Card className="px-10 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="text-gray-600 text-sm">Subtotal</p>
          <p className="font-bold text-sm text-gray-600">R$ 2.000,00</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="text-gray-600 text-sm">Descontos</p>
          <p className="font-bold text-sm text-gray-600">R$ 1.000,00</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-gray-200">
          <p className="font-bold text-primary text-base">Total</p>
          <p className="font-bold text-base text-primary">R$ 1.000,00</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <Button className="cursor-pointer w-full">Continuar</Button>
        <Link href="/home">
          <p className="text-gray-500 underline text-sm">Adicionar mais produtos</p>
        </Link>
      </div>
    </Card>
  );
};
