"use client";

import { useMutation } from "@tanstack/react-query";
import { CreateOrderInput } from "@/lib/schemas";

interface OrderRequestBody {
  amount: {
    product: string;
    amount: number;
  }[];
  receiver: {
    address: string;
    lat: number;
    long: number;
    name: string;
    phone: string;
  };
  refCode: string;
  note: string;
}

interface OrderResponse {
  _id: string;
  // Add other response fields here if needed
}

interface UseCreateOrderOptions {
  onSuccess?: (data: OrderResponse) => void;
  onError?: (error: Error) => void;
}

const DEFAULT_UNIT = 10;

export function useCreateOrder(options?: UseCreateOrderOptions) {
  return useMutation({
    mutationFn: async (data: CreateOrderInput) => {
      const requestBody: OrderRequestBody = {
        amount: data.items.map(item => ({
          product: item.code,
          amount: item.quantity * DEFAULT_UNIT
        })),
        receiver: {
          address: data.address,
          lat: data.addressCoords.lat || 0,
          long: data.addressCoords.lng || 0,
          name: data.fullName,
          phone: data.phone
        },
        refCode: "",
        note: data.note || ""
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/web-direct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      return response.json() as Promise<OrderResponse>;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
} 