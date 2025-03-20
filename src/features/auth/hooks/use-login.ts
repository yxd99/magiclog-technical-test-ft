import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { toast } from "sonner";

import { useProfileStore } from "@/store/profile/profile";

import { type Login } from "../interfaces/login";
import { loginService } from "../services/auth.service";

interface UseLoginProps {
  onSuccess: () => void;
}

export const useLogin = ({ onSuccess }: UseLoginProps) => {
  const { setUser } = useProfileStore();
  return useMutation({
    mutationFn: async (data: Login) => await loginService(data),
    onSuccess: (data) => {
      toast.success("Welcome back!");
      setUser(data);
      onSuccess();
    },
    onError: (error: AxiosError) => {
      const { response } = error as {
        response: {
          data: {
            data: string;
          };
        };
      };
      const message = response.data.data;
      toast.error(message);
    },
  });
};
