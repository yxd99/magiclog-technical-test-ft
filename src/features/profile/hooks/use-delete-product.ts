import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductService } from "../services/profile.service";
import { GET_MY_PRODUCTS } from "../constants/query-keys";

interface UseDeleteProductProps {
  onSuccess?: () => void;
}

export const useDeleteProduct = ({ onSuccess = () => {} }: UseDeleteProductProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (productId: string) => deleteProductService(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_MY_PRODUCTS],
      });
      onSuccess();
    },
  });

  return query;
}