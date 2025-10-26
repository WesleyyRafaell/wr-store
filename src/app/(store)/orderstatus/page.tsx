import { Suspense } from "react";
import OrderStatusContent from "./order-status-content";

const OrderStatus = () => {
  return (
    <Suspense fallback={<div>Carregando informações do pedido...</div>}>
      <OrderStatusContent />
    </Suspense>
  );
};

export default OrderStatus;
