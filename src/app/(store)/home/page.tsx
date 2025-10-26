"use client";
import { Product } from "@/components/molecules";
import { useHome } from "./useHome";
import { Spinner } from "@/components/ui/spinner";

const Home = () => {
  const { products, loading } = useHome();
  return (
    <div className="pt-7">
      <h1 className="font-bold text-center md:text-start text-3xl text-primary mb-7">
        Aproveite nossas ofertas
      </h1>

      {loading ? (
        <div className="w-full flex justify-center pt-20">
          <Spinner className="size-8 text-primary" />
        </div>
      ) : null}

      {!loading ? (
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
