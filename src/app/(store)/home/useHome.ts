import { getProducts } from "@/features/products/action";
import { IProducts } from "@/features/products/model";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useHome = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false);

  const getProductsData = async () => {
    setLoading(true);
    const products = await getProducts();
    setLoading(false);

    if (!products.success) {
      toast.error(products.error);
      return;
    }

    setProducts(products.data || []);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return {
    products,
    loading,
  };
};
