import { useInfiniteQuery } from "@tanstack/react-query"
import { FETCH_ADMIN_PRODUCTS } from "../constants/query-keys";
import { fetchAdminProductsService } from "../services/product.service";
import { ProductFilters } from "../interfaces/product-filters";

export const useAdminProducts = (filters: ProductFilters) => {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [FETCH_ADMIN_PRODUCTS, filters],
    queryFn: ({ pageParam }) => fetchAdminProductsService({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, pages) => lastPage.length ? pages.length + 1 : undefined,
    enabled: true,
  });

  const products = query.data?.pages.flatMap(page => page) ?? [];

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
