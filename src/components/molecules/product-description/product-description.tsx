import { NumberStepper } from "@/components/molecules";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export const ProductDescription = () => {
  return (
    <Card className="px-10">
      <div className="flex gap-7">
        <div className="flex flex-col gap-4">
          <p className="text-gray-600 text-sm">Produto</p>
          <Image src="/products/cell.jpg" width={100} height={100} alt="Produto" />
        </div>
        <div className="flex flex-col gap-4 max-w-2xs">
          <p className="text-gray-600 text-sm">Descrição</p>
          <p className="font-bold text-sm">
            Smartphone Xiaomi Redmi 14C BR 256GB 4GB RAM Virtual Tela 6&quot; 120hz Câmera Traseira
            50MP - Preto
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-2xs">
          <p className="text-gray-600 text-sm">Quantidade</p>
          <NumberStepper />
        </div>
        <div className="flex flex-col gap-4 max-w-2xs">
          <p className="text-gray-600 text-sm">Preço</p>
          <div>
            <p className="text-sm line-through">R$ 1.000,00</p>
            <p className="font-bold text-base text-primary">R$ 1.000.00</p>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <MdClose className="text-red-700 text-2xl cursor-pointer" />
        </div>
      </div>
    </Card>
  );
};
