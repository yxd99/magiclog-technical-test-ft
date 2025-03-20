import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { toast } from "sonner";

import { GET_MY_PRODUCTS } from "../constants/query-keys";
import { type CreateProduct } from "../interfaces/create-product";
import { createProductService } from "../services/profile.service";

interface UseCreateProductProps {
  onSuccess?: () => void;
}

export const useCreateProduct = ({
  onSuccess = () => {},
}: UseCreateProductProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (product: CreateProduct) => createProductService(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_MY_PRODUCTS],
      });
      onSuccess();
    },
    onError: (data: AxiosError) => {
      const {
        response: {
          data: { data: message },
        },
      } = data as { response: { data: { data: string } } };
      toast.error(message);
    },
  });

  return query;
};
