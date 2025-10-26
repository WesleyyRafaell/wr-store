"use client";

import { OrderStatusList } from "@/components/molecules";
import { creditCard, pix, ticket } from "./order-list";
import { useSearchParams } from "next/navigation";

type IPaymentTypeProps = "pix" | "ticket" | "creditCard";

const OrderStatus = () => {
  const searchParams = useSearchParams();

  const paymentType = searchParams.get("payment_type");

  const paymentMap = {
    pix,
    ticket,
    creditCard,
  } as const;

  const orderList = paymentMap[paymentType as IPaymentTypeProps] ?? creditCard;

  return (
    <div className="pt-7">
      <h1 className="text-lg font-bold text-primary text-center md:text-start">Status do pedido</h1>
      <div className="pt-11 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0">
          {orderList.map((item, index) => (
            <OrderStatusList
              key={item.title}
              title={item.title}
              icon={item.icon}
              noUnderline={index !== orderList.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
