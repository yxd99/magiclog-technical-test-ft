import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMyProductsService } from '../services/profile.service';
import { GET_MY_PRODUCTS } from '../constants/query-keys';

export const useFetchMyProducts = (filters: Record<string, unknown>) => {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [GET_MY_PRODUCTS],
    queryFn: ({ pageParam = 1 }) =>
      fetchMyProductsService({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.length ? pages.length + 1 : undefined,
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
