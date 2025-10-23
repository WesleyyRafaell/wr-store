import { ProductsRepository } from "./repository";

export async function getProducts() {
  const result = await ProductsRepository.getProducts();

  if (!result.success) {
    return { success: false, error: result.error };
  }

  return { success: true, data: result.data };
}
