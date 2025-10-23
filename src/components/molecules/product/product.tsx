"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IProducts } from "@/features/products/model";
import { useProductsStore } from "@/store/products";
import { isLoggedIn } from "@/utils/storage";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

export const Product = ({ title, description, price, oldPrice, imageUrl }: IProducts) => {
  const { setProducts, products } = useProductsStore();
  const userIsLoggedIn = isLoggedIn();

  const addToCart = () => {
    if (!userIsLoggedIn) {
      toast.error("Você precisa estar logado para adicionar itens ao carrinho.");
      return;
    }

    const newProducts = [...products, { title, description, price, oldPrice, imageUrl }];
    setProducts(newProducts);
    toast.success("Produto adicionado ao carrinho com sucesso!");
  };

  return (
    <Card className="w-full max-w-3xs">
      <CardHeader className="flex justify-center">
        <Image src={imageUrl} width={200} height={200} alt="Picture of the author" />
      </CardHeader>
      <CardContent>
        <p className="font-bold text-sm line-clamp-2 text-gray-800">{title}</p>
        <div className="py-2">
          <p className="text-sm line-through">R$ {oldPrice.toFixed(2)}</p>
          <p className="font-bold text-lg text-primary">R$ {price.toFixed(2)}</p>
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
