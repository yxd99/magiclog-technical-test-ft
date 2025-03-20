import { httpClient } from "@/lib/http";

import { type AuthAPIResponse } from "../interfaces/auth-api-response";
import { type Login } from "../interfaces/login";
import { type SignUp } from "../interfaces/sign-up";

export const signUpService = async (data: SignUp) => {
  const response = await httpClient.post<AuthAPIResponse, SignUp>(
    "/auth/signup",
    data,
  );
  return response.data;
};

export const loginService = async (data: Login) => {
  const response = await httpClient.post<AuthAPIResponse, Login>(
    "/auth/login",
    data,
  );
  return response.data;
};
