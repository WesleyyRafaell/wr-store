"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { isLoggedIn } from "@/utils/storage";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

export const Product = () => {
  const userIsLoggedIn = isLoggedIn();

  const addToCart = () => {
    if (!userIsLoggedIn) {
      toast.error("Você precisa estar logado para adicionar itens ao carrinho.");
      return;
    }

    // Lógica para adicionar o produto ao carrinho
  };

  return (
    <Card className="w-full max-w-3xs">
      <CardHeader className="flex justify-center">
        <Image src="/products/cell.jpg" width={200} height={200} alt="Picture of the author" />
      </CardHeader>
      <CardContent>
        <p className="font-bold text-sm line-clamp-2 text-gray-800">
          Smartphone Xiaomi Redmi 14C BR 256GB 4GB RAM Virtual Tela 6&quot; 120hz Câmera Traseira
          50MP - Preto
        </p>
        <div className="py-2">
          <p className="text-sm line-through">R$ 1.599,00</p>
          <p className="font-bold text-lg text-primary">R$ 1.299,00</p>
        </div>
        <div className="pt-1.5">
          <Button onClick={addToCart} className="w-full cursor-pointer" variant="secondary">
            <MdOutlineShoppingCart size={25} />
            Adicionar ao carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
