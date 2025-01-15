import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api-client';
import type { Product, ProductsResponse } from '@/types/product';

export function useProducts() {
  return useQuery<ProductsResponse, Error, Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
} 