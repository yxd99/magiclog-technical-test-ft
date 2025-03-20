import { config } from '@/config/envs';
import { HTTP_STATUS_MESSAGE } from '@/lib/constants/http-status';
import { filtersToQueryParams } from '@/lib/utils';
import { useProfileStore } from '@/store/profile/profile';

export interface HttpResponse<T> {
  data: T;
}

export class HttpClient {
  constructor(private readonly baseUrl: string) {
    if (!baseUrl) {
      throw new Error('baseUrl is required');
    }
  }

  private getAuthHeaders(): Record<string, string> {
    const token = useProfileStore.getState().user?.accessToken;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private async jsonResponse<T>(response: Promise<Response>) {
    const awaitedResponse = await response;

    return {
      data: (await awaitedResponse.json()).data as T,
      statusCode: awaitedResponse.status,
      status: HTTP_STATUS_MESSAGE[awaitedResponse.status],
    };
  }

  async get<T>(
    path: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    const queryParams = filtersToQueryParams(params);
    const url = new URL(`${this.baseUrl}${path}?${queryParams}`);

    const fetchPromise = fetch(url, {
      headers: {
        ...this.getAuthHeaders(),
        ...headers,
      },
      cache: 'no-store',
    });

    return this.jsonResponse<T>(fetchPromise);
  }

  async post<T, B>(
    path: string,
    body: B,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    const fetchPromise = fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return this.jsonResponse<T>(fetchPromise);
  }

  async patch<T, B>(
    path: string,
    body: B,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    const fetchPromise = fetch(`${this.baseUrl}${path}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return this.jsonResponse<T>(fetchPromise);
  }

  async delete<T>(
    path: string,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    const fetchPromise = fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      headers: {
        ...this.getAuthHeaders(),
        ...headers,
      },
    });

    return this.jsonResponse<T>(fetchPromise);
  }
}

export const httpClient = new HttpClient(String(config.apiUrl));
