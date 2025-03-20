import { useLocation, useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";

import { camelToSnakeCase } from "@/lib/utils";

import { type ProductFilters } from "../interfaces/product-filters";

export const useProductFilters = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const filters: ProductFilters = {
    name: searchParams.get("name") ?? undefined,
    sku: searchParams.get("sku") ?? undefined,
    minPrice: searchParams.get("min_price") ?? undefined,
    maxPrice: searchParams.get("max_price") ?? undefined,
    userEmail: searchParams.get("user_email") ?? undefined,
    userName: searchParams.get("user_name") ?? undefined,
  };

  const setFilters = (newFilters: Partial<ProductFilters>) => {
    if (
      newFilters.minPrice &&
      newFilters.maxPrice &&
      newFilters.minPrice > newFilters.maxPrice
    ) {
      toast.error("El precio mínimo no puede ser mayor que el máximo");
      return;
    }

    if (
      newFilters.minPrice &&
      newFilters.maxPrice &&
      newFilters.minPrice < newFilters.maxPrice
    ) {
      toast.error("El precio máximo no puede ser menor que el mínimo");
      return;
    }
    const params = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      const paramKey = camelToSnakeCase(key);
      if (value) {
        params.set(camelToSnakeCase(paramKey), value.toString());
      } else {
        params.delete(paramKey);
      }
    });

    void navigate(`${pathname}?${params.toString()}`, { replace: true });
  };

  return { filters, setFilters };
};
