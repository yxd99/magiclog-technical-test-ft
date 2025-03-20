import { AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

export interface ProfileActions {
  setUser: (user: AuthAPIResponse | null) => void;
}
