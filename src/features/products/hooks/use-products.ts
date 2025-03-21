import { useInfiniteQuery } from "@tanstack/react-query";

import { FETCH_PRODUCTS } from "../constants/query-keys";
import { type ProductFilters } from "../interfaces/product-filters";
import { fetchProducts as fetchProductsService } from "../services/products.services";

export const useProducts = (filters: ProductFilters) => {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [FETCH_PRODUCTS, filters],
    queryFn: ({ pageParam }) =>
      fetchProductsService({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.length ? pages.length + 1 : undefined,
    enabled: true,
  });

  const products = query.data?.pages.flatMap((page) => page) ?? [];

  const handleChangeInView = (inView: boolean) => {
    if (inView) {
      void query.fetchNextPage();
    }
  };

  return {
    ...query,
    products,
    handleChangeInView,
  };
};
