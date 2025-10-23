import { IProducts } from "./model";
import { productsMock } from "./products-mock";

export interface IProductsRepository {
  getProducts(): Promise<
    { success: true; data: IProducts[] | [] } | { success: false; error: string }
  >;
}

export const ProductsRepository: IProductsRepository = {
  async getProducts() {
    try {
      const response = await new Promise<{ products: IProducts[] | null }>((resolve) =>
        setTimeout(() => resolve({ products: productsMock }), 1000)
      );

      if (!response) return { success: false, error: "Erro na solicitação" };

      if (!response.products) return { success: true, data: [] };

      return { success: true, data: response.products };
    } catch (error) {
      return { success: false, error: "Failed to fetch products" };
    }
  },
};
