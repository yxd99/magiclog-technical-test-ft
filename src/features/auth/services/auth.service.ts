import { httpClient } from "@/lib/http"
import { SignUp } from "../interfaces/sign-up"
import { AuthAPIResponse } from "../interfaces/auth-api-response"
import { Login } from "../interfaces/login"

export const signUpService = async (data: SignUp) => {
  const response = await httpClient.post<AuthAPIResponse, SignUp>('/auth/signup', data)
  return response.data;
}

export const loginService = async (data: Login) => {
  const response = await httpClient.post<AuthAPIResponse, Login>('/auth/login', data)
  return response.data;
}
