import { type Pagination } from "./pagination";

export interface ProductFilters extends Pagination {
  name?: string;
  sku?: string;
  minPrice?: string;
  maxPrice?: string;
  userEmail?: string;
  userName?: string;
}
