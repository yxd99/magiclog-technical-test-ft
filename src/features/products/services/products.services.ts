import { httpClient } from "@/lib/http";

import { type Product } from "../interfaces/product";
import { type ProductFilters } from "../interfaces/product-filters";

export const fetchProducts = async (filters: ProductFilters) => {
  const response = await httpClient.get<Product[]>("/products", { ...filters });
  return response.data;
};
