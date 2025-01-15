import { ProductsResponse } from "@/types/product";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?$fields=code,name,description,unit,price,status&status=ACTIVE`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
} 