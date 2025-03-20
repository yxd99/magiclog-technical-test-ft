import { httpClient } from "@/lib/http"
import { Product } from "../interfaces/product";
import { ProductFilters } from "../interfaces/product-filters";

export const fetchProducts = async (filters: ProductFilters) => {
  const response = await httpClient.get<Product[]>("/products", { ...filters });
  return response.data;
};
