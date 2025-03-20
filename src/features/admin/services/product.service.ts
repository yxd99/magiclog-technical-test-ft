import { httpClient } from "@/lib/http";

import { type Product } from "../interfaces/product";
import { type ProductFilters } from "../interfaces/product-filters";

export const fetchAdminProductsService = async (filters: ProductFilters) => {
  const response = await httpClient.get<Product[]>("/products/admin", {
    ...filters,
  });
  return response.data;
};
