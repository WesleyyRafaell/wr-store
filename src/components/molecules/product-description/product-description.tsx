import { NumberStepper } from "@/components/molecules";
import { Card } from "@/components/ui/card";
import { IProducts } from "@/features/products/model";
import { useProductsStore } from "@/store/products";
import { formatCurrency } from "@/utils/currency";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export const ProductDescription = ({
  id,
  description,
  price,
  oldPrice,
  imageUrl,
  quantity,
}: IProducts) => {
  const { setProducts, products } = useProductsStore();

  const removeProduct = () => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <Card className="px-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-7">
        <div className="flex flex-col gap-4 text-center md:text-start">
          <p className="text-gray-600 text-sm">Produto</p>
          <Image src={imageUrl} width={100} height={100} alt="Produto" />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start max-w-2xs">
          <p className="text-gray-600 text-sm">Descrição</p>
          <p className="font-bold text-sm">{description}</p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start max-w-2xs">
          <p className="text-gray-600 text-sm">Quantidade</p>
          <NumberStepper productQuantity={quantity} id={id} />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start max-w-2xs">
          <p className="text-gray-600 text-sm">Preço</p>
          <div>
            {oldPrice > 0 ? (
              <p className="text-sm line-through">{formatCurrency(oldPrice * quantity)}</p>
            ) : null}
            <p className="font-bold text-base text-primary">{formatCurrency(price * quantity)}</p>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <MdClose className="text-red-700 text-2xl cursor-pointer" onClick={removeProduct} />
        </div>
      </div>
    </Card>
  );
};
