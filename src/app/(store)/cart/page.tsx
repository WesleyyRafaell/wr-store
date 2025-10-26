"use client";

import { ProductDescription, TotalPriceCard } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { useProductsStore } from "@/store/products";
import Link from "next/link";
import { FaSadCry } from "react-icons/fa";

const Cart = () => {
  const { products } = useProductsStore();

  return (
    <div className="pt-7">
      {products?.length ? (
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between">
          <div className="w-full md:w-2/3">
            <div className="flex flex-col gap-5">
              {products.map((product) => (
                <ProductDescription key={product.id} {...product} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <TotalPriceCard>
              <Link href="checkout" className="w-full">
                <Button className="cursor-pointer w-full">Continuar</Button>
              </Link>
            </TotalPriceCard>
          </div>
        </div>
      ) : null}
      {!products?.length ? (
        <div className="w-full flex flex-col items-center gap-1.5">
          <div className="flex items-center justify-center gap-3.5 pt-4">
            <FaSadCry className="text-primary text-2xl" />
            <p className="text-2xl text-primary font-bold">Seu carrinho está vazio.</p>
          </div>
          <Link href="/home">
            <p className="text-gray-500 underline text-sm">Adicione alguns produtos</p>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
