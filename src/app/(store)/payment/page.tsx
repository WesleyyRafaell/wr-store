import { Suspense } from "react";
import PaymentContent from "./payment-content";

const Payment = () => {
  return (
    <Suspense fallback={<div>Carregando informações de pagamento...</div>}>
      <PaymentContent />
    </Suspense>
  );
};

export default Payment;
