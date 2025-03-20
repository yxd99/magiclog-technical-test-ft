import { AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

export interface ProfileState {
  user: AuthAPIResponse | null;
}
