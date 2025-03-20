import { useInfiniteQuery } from "@tanstack/react-query";

import { GET_MY_PRODUCTS } from "../constants/query-keys";
import { type ProductFilters } from "../interfaces/product-filters";
import { fetchMyProductsService } from "../services/profile.service";

export const useFetchMyProducts = (filters: ProductFilters) => {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [GET_MY_PRODUCTS, filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchMyProductsService({ ...filters, page: pageParam }),
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
