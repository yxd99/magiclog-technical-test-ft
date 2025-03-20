import { Pagination } from "./pagination";

export interface ProductFilters extends Pagination {
  name?: string;
  sku?: string;
  price?: string;
  stock?: string;
  minPrice?: string;
  maxPrice?: string;
}
