import { camelToSnakeCase } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router';

export const useProductFilters = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { pathname } = location;

  const [filters, setFilters] = useState<Record<string, string | undefined>>(
    () => {
      const name = searchParams.get('name') ?? undefined;
      const price = searchParams.get('price') ?? undefined;
      const stock = searchParams.get('stock') ?? undefined;
      const minPrice = searchParams.get('min_price') ?? undefined;
      const maxPrice = searchParams.get('max_price') ?? undefined;
      return { name, price, stock, minPrice, maxPrice };
    },
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(filters).forEach(([key, values]) => {
      if (values && values.length > 0) {
        params.set(camelToSnakeCase(key), values.toString());
      } else {
        params.delete(key);
      }
    });

    const queryString = Array.from(params.entries())
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    window.history.replaceState({}, '', `${pathname}?${queryString}`);
  }, [filters, searchParams, pathname]);

  return { filters, setFilters, searchParams };
};
