import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductService } from "../services/profile.service";
import { GET_MY_PRODUCTS } from "../constants/query-keys";
import { CreateProduct } from "../interfaces/create-product";

interface UseCreateProductProps {
  onSuccess?: () => void;
}

export const useCreateProduct = ({ onSuccess = () => {} }: UseCreateProductProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (product: CreateProduct) => createProductService(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_MY_PRODUCTS],
      });
      onSuccess();
    },
  });

  return query;
}