"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IProducts } from "@/features/products/model";
import { useProductsStore } from "@/store/products";
import { formatCurrency } from "@/utils/currency";
import { isLoggedIn } from "@/utils/storage";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

export const Product = ({
  title,
  description,
  price,
  oldPrice,
  imageUrl,
  id,
  quantity,
}: IProducts) => {
  const { setProducts, products } = useProductsStore();
  const userIsLoggedIn = isLoggedIn();

  const increaseProductQuantity = () => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    return newProducts;
  };

  const addNewProduct = () => {
    const newProducts = [
      ...products,
      { id, quantity, title, description, price, oldPrice, imageUrl },
    ];

    return newProducts;
  };

  const addToCart = () => {
    if (!userIsLoggedIn) {
      toast.error("Você precisa estar logado para adicionar itens ao carrinho.");
      return;
    }

    const productExists = products.find((product) => product.id === id);

    const newProducts = productExists ? increaseProductQuantity() : addNewProduct();

    setProducts(newProducts);
    toast.success("Produto adicionado ao carrinho com sucesso!");
  };

  return (
    <Card className="w-full max-w-3xs">
      <CardHeader className="flex justify-center">
        <Image src={imageUrl} width={200} height={200} alt="Picture of the author" />
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="font-bold text-sm line-clamp-2 text-gray-800">{title}</p>
        <div className="py-2">
          {oldPrice > 0 ? <p className="text-sm line-through">{formatCurrency(oldPrice)}</p> : null}
          <p className="font-bold text-lg text-primary">{formatCurrency(price)}</p>
        </div>
        <div className="pt-1.5 flex flex-1 items-end">
          <Button onClick={addToCart} className="w-full cursor-pointer" variant="secondary">
            <MdOutlineShoppingCart size={25} />
            Adicionar ao carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
