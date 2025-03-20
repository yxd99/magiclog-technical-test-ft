import { useMutation } from "@tanstack/react-query";
import { SignUp } from "../interfaces/sign-up";
import { signUpService } from "../services/auth.service";
import { toast } from "sonner";
import { useProfileStore } from "@/store/profile/profile";
import { AxiosError } from "axios";

interface UseSignUpProps {
  onSuccess?: () => void;
}

export const useSignUp = ({ onSuccess = () => {} }: UseSignUpProps) => {
  const { setUser } = useProfileStore();
  return useMutation({
  mutationFn: async (data: SignUp) => signUpService(data),
  onSuccess: (data) => {
    toast.success('Welcome to our platform!');
    setUser(data);
    onSuccess();
  },
  onError: (error: AxiosError) => {
    const {
      response
    } = error as {
      response: {
        data: {
          data: string;
        };
      };
    };
    const message = response.data.data; 
    toast.error(message);
  },
})};
