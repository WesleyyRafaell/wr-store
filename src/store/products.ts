import { IProducts } from "@/features/products/model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductsState {
  products: IProducts[] | [];
  setProducts: (products: IProducts[]) => void;
  // clearUser: () => void;
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [],

      setProducts: (products) => set({ products }),

      // clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
