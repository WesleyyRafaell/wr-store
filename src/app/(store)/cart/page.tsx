import { ProductDescription, TotalPriceCard } from "@/components/molecules";

const Cart = () => {
  return (
    <div className="pt-7">
      <div className="flex justify-between">
        <div className="w-2/3">
          <div className="flex flex-col gap-5">
            <ProductDescription />
            <ProductDescription />
          </div>
        </div>
        <div className="w-1/4">
          <TotalPriceCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
