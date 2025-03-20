import { useMutation, useQueryClient } from "@tanstack/react-query";

import { GET_MY_PRODUCTS } from "../constants/query-keys";
import { deleteProductService } from "../services/profile.service";

interface UseDeleteProductProps {
  onSuccess: () => void;
}

export const useDeleteProduct = ({ onSuccess }: UseDeleteProductProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (productId: string) => deleteProductService(productId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [GET_MY_PRODUCTS],
      });
      onSuccess();
    },
  });

  return query;
};
