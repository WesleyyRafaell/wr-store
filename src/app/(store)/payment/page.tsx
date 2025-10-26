"use client";
import { RenderCondition } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { IoIosTimer } from "react-icons/io";
import { toast } from "react-toastify";

const Payment = () => {
  const searchParams = useSearchParams();

  const paymentType = searchParams.get("payment_type");
  console.log(`paymentType`, paymentType);
  return (
    <div className="pt-7 flex flex-col items-center gap-7">
      <Card className="w-2xl">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">Falta pouco!</p>
          <p className="text-lg font-bold">Pague R$ 6.528,08 via Pix para concluir sua compra</p>
        </div>
      </Card>
      <RenderCondition condition={paymentType === "ticket"}>
        <Card className="w-2xl">
          <div className="px-4">
            <p className="text-lg font-bold">Instruções de pagamento</p>
            <p className="text-gray-700 text-sm mt-2">
              Para pagar pelo Internet Banking, copie a linha digitável ou escaneie o código de
              barras. Para pagar em qualquer banco, caixa eletrônico ou lotérica, por favor, imprima
              o boleto.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <IoIosTimer className="text-gray-600 text-lg" />
              <p className="text-sm">
                Aprovação em 1 ou 2 dias úteis. Os pagamentos feitos nos fins de semana ou feriados
                serão aprovados no dia útil seguinte.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-5">
              <Image src="/codigobarras.png" alt="codigo de barras" width={500} height={200} />
              <p>42297.11504 00064.897317 08161.108629 1 12480000652299</p>
              <Button onClick={() => toast.success("Copiado com sucesso!")} className="mt-3">
                Copiar linha digitável
              </Button>
            </div>
          </div>
        </Card>
      </RenderCondition>
      <RenderCondition condition={paymentType === "pix"}>
        <Card className="w-2xl">
          <div className="px-4">
            <p className="text-lg font-bold">Escaneie um código QR para pagar</p>
            <div className="flex flex-col gap-1 px-1.5">
              <p>1. Acesse seu Internet Banking ou app de pagamentos</p>
              <p>2. Escolha pagar via Pix</p>
              <p>3. Escaneie o código a seguir: </p>
            </div>
            <div className="flex justify-center py-5">
              <Image src="/codigqr.png" alt="codigo qr" width={150} height={150} />
            </div>
            <div className="flex items-center gap-1">
              <IoIosTimer className="text-gray-600" />
              <p className="text-sm text-gray-600">Pague e será créditado na hora.</p>
            </div>
            <div className="border-t mt-4 pt-2">
              <p className="text-lg font-bold">Ou copie este código para fazer o pagamento</p>
              <div className="border rounded-sm mt-2 p-2.5">
                <p className="text-gray-600 text-sm line-clamp-2">
                  048451218.gov.bcb.pix.pixtestecodigo048451218.gov.bcb.pix.pixtestecodigo048451218.gov.bcb.pix.pixtestecodigo
                </p>
              </div>
              <Button onClick={() => toast.success("Copiado com sucesso!")} className="mt-3">
                Copiar código
              </Button>
            </div>
          </div>
        </Card>
      </RenderCondition>
    </div>
  );
};

export default Payment;
