import { camelToSnakeCase } from '@/lib/utils';
import { useSearchParams, useLocation, useNavigate } from 'react-router';
import { ProductFilters } from '../interfaces/product-filters';

export const useProductFilters = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const filters: ProductFilters = {
    name: searchParams.get('name') ?? undefined,
    sku: searchParams.get('sku') ?? undefined,
    price: searchParams.get('price') ?? undefined,
    stock: searchParams.get('stock') ?? undefined,
    minPrice: searchParams.get('min_price') ?? undefined,
    maxPrice: searchParams.get('max_price') ?? undefined,
  };

  const setFilters = (newFilters: Partial<ProductFilters>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      const paramKey = camelToSnakeCase(key);
      if (value) {
        params.set(camelToSnakeCase(paramKey), value.toString());
      } else {
        params.delete(paramKey);
      }
    });

    navigate(`${pathname}?${params.toString()}`, { replace: true });
  };

  return { filters, setFilters };
};
