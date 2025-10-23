import { Product } from "@/components/molecules";

const Home = () => {
  return (
    <div className="pt-7">
      <h1 className="font-bold text-3xl text-primary mb-7">Aproveite nossas ofertas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
