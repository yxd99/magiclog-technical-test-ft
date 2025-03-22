import { type useQueryClient } from "@tanstack/react-query";

import { type AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

export interface ProfileActions {
  setUser: (user: AuthAPIResponse | null) => void;
  logout: (queryClient: ReturnType<typeof useQueryClient>) => void;
}
