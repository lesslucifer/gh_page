import { z } from "zod"

export const checkoutFormSchema = z.object({
  fullName: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự").nonempty("Thông tin không được để trống"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ").nonempty("Thông tin không được để trống"),
  address: z.string().min(2, "Địa chỉ phải có ít nhất 2 ký tự").nonempty("Thông tin không được để trống"),
  note: z.string().optional(),
  items: z.array(z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    size: z.string()
  })),
  shippingMethod: z.enum(["same-day"]),
  paymentMethod: z.enum(["cod"])
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema> 