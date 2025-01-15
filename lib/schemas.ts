import { z } from "zod"

export interface CartItem {
  id: string;
  code: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export const checkoutFormSchema = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
  address: z.string().min(1),
  note: z.string().optional(),
  shippingMethod: z.enum(["same-day"]),
  paymentMethod: z.enum(["cod"]),
  items: z.array(z.custom<CartItem>())
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>

export interface CreateOrderInput extends Omit<CheckoutFormValues, 'items'> {
  items: CartItem[];
  addressCoords: {
    lat?: number;
    lng?: number;
  };
} 