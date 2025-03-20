import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductService } from "../services/profile.service";
import { GET_MY_PRODUCTS } from "../constants/query-keys";
import { CreateProduct } from "../interfaces/create-product";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface UseUpdateProductProps {
  onSuccess?: () => void;
}

interface MutationProps {
  productId: string;
  product: CreateProduct;
}

export const useUpdateProduct = ({ onSuccess = () => {} }: UseUpdateProductProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: ({ productId, product }: MutationProps) => updateProductService(productId, product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_MY_PRODUCTS],
      });
      onSuccess();
    },
     onError: (data: AxiosError) => {
          const {
            response: { data: { data: message } }, 
          } = data as { response: { data: { data: string } } };
          toast.error(message);
        }
  });

  return query;
}
