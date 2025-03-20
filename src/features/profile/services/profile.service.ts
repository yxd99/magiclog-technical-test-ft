import { httpClient } from "@/lib/http";
import { Product } from "../interfaces/product";
import { CreateProduct } from "../interfaces/create-product";

export const fetchMyProductsService = async (filters: Record<string, unknown>) => {
  const response = await httpClient.get<Product[]>('/profile/products', filters);
  return response.data;
}

export const createProductService = async (product: CreateProduct) => {
  const response = await httpClient.post<unknown, CreateProduct>('/products', product);
  return response.data;
}

export const updateProductService = async (productId: string, product: CreateProduct) => {
  const response = await httpClient.patch<Product, CreateProduct>(`/products/${productId}`, product);
  return response.data;
}

export const deleteProductService = async (productId: string) => {
  const response = await httpClient.delete<unknown>(`/products/${productId}`); 
  return response.data;
}
