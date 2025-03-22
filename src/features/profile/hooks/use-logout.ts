import { useQueryClient } from "@tanstack/react-query";

import { useProfileStore } from "@/store/profile/profile";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useProfileStore((state) => state.logout);

  return () => logout(queryClient);
};
