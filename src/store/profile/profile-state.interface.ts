import { type AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

export interface ProfileState {
  user: AuthAPIResponse | null;
  isAdmin: boolean;
  isSeller: boolean;
}
