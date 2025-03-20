import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

import { config } from "@/config/envs";
import { HTTP_STATUS_MESSAGE } from "@/lib/constants/http-status";
import { useProfileStore } from "@/store/profile/profile";

import { camelToSnakeCase } from "./utils";

export interface HttpResponse<T> {
  data: T;
  statusCode: number;
  status: string;
}

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    if (!baseUrl) {
      throw new Error("baseUrl is required");
    }

    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });

    this.axiosInstance.interceptors.request.use((config) => {
      const token = useProfileStore.getState().user?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (config.params) {
        config.params = Object.fromEntries(
          Object.entries(config.params).map(([key, value]) => [
            camelToSnakeCase(key),
            value,
          ]),
        );
      }
      return config;
    });
  }

  private async request<T>(
    config: AxiosRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.axiosInstance.request<{ data: T }>(config);
    return {
      data: response.data.data,
      statusCode: response.status,
      status: HTTP_STATUS_MESSAGE[response.status],
    };
  }

  async get<T>(
    path: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>,
  ): Promise<HttpResponse<T>> {
    return this.request<T>({
      method: "GET",
      url: path,
      params,
      headers,
    });
  }

  async post<T, B>(
    path: string,
    body: B,
    headers?: Record<string, string>,
  ): Promise<HttpResponse<T>> {
    return this.request<T>({
      method: "POST",
      url: path,
      data: body,
      headers,
    });
  }

  async patch<T, B>(
    path: string,
    body: B,
    headers?: Record<string, string>,
  ): Promise<HttpResponse<T>> {
    return this.request<T>({
      method: "PATCH",
      url: path,
      data: body,
      headers,
    });
  }

  async delete<T>(
    path: string,
    headers?: Record<string, string>,
  ): Promise<HttpResponse<T>> {
    return this.request<T>({
      method: "DELETE",
      url: path,
      headers,
    });
  }
}

export const httpClient = new HttpClient(String(config.apiUrl));
