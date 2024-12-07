"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { checkoutFormSchema, type CheckoutFormValues } from "@/lib/schemas";
import Image from "next/image";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormValues) => Promise<void>;
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
  }[];
}

export function CheckoutForm({ onSubmit, cartItems }: CheckoutFormProps) {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      items: cartItems,
      shippingMethod: "same-day",
      paymentMethod: "cod",
    },
  });

  const {
    formState: { errors },
  } = form;

  console.log("11111", { errors });
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 15000;
  const grandTotal = total + shipping;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center items-start w-full"
      >
        <div className="grid lg:grid-cols-2 gap-8 max-w-[1200px] w-full">
          {/* Left Column - Customer Details */}
          <div className="bg-white rounded-lg p-6 max-w-[687px] w-full mx-auto">
            <h2 className="text-lg font-medium mb-2 text-black-2">
              Chi tiết đơn hàng
            </h2>
            <p className="text-base leading-[20.8px] font-normal text-gray-500 mb-6">
              Điền thông tin chi tiết về đơn hàng của bạn
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-600">
                        Họ và tên
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập họ và tên"
                          {...field}
                          className={`rounded-md border-gray-200 placeholder:text-[14px] placeholder:leading-[18.2px] placeholder:font-normal placeholder:text-gray-4  focus:border-green-600
                            ${
                              form.formState.errors.fullName
                                ? "border-red-600"
                                : ""
                            }`}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600">
                        {errors.fullName ? "Thông tin không được để trống" : ""}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-600">
                        Số điện thoại
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập số điện thoại"
                          {...field}
                          className={`rounded-md border-gray-200 placeholder:text-[14px] placeholder:leading-[18.2px] placeholder:font-normal placeholder:text-gray-4  focus:border-green-600
                            ${
                              form.formState.errors.phone
                                ? "border-red-600"
                                : ""
                            }`}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600">
                        {errors.phone ? "Thông tin không được để trống" : ""}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-gray-600">
                      Địa chỉ nhận hàng
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Số nhà và tên đường"
                        {...field}
                        className={`rounded-md border-gray-200 placeholder:text-[14px] placeholder:leading-[18.2px] placeholder:font-normal placeholder:text-gray-4 focus:border-green-600
                          ${
                            form.formState.errors.address
                              ? "border-red-600"
                              : ""
                          }`}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600">
                      {errors.address ? "Thông tin không đ�ợc để trống" : ""}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-gray-600">
                      Ghi chú
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ghi chú ở đây"
                        {...field}
                        className="rounded-md border-gray-200 min-h-[100px] placeholder:text-[14px] placeholder:leading-[18.2px] placeholder:font-normal placeholder:text-gray-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div
                className="border-t my-6"
                style={{ margin: "40px 0px" }}
              ></div>

              <div className="space-y-4">
                <h3 className="font-medium">Hình thức vận chuyển</h3>
                <FormField
                  control={form.control}
                  name="shippingMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="same-day"
                                className="border-black-2 text-green-600 focus:ring-green-600"
                              />
                            </FormControl>
                            <FormLabel className="font-semibold text-base leading-[20.8px] text-black-2">
                              Giao hàng trong ngày - Miễn phí
                            </FormLabel>
                          </FormItem>
                          <p className="text-[11px] leading-[14.3px] font-normal text-gray-2 ml-7">
                            Gạo Hạt cam kết thời gian giao hàng trong vòng 2
                            tiếng được tính từ lúc nhân viên Chăm sóc khách hàng
                            (CSKH) xác nhận đơn hàng thành công. Được áp dụng
                            trong khu vực nội thành TP. HCM, Hà Nội, Đà Nẵng.
                          </p>
                          <p className="text-[11px] leading-[14.3px] font-semibold italic text-gray-2 ml-7">
                            Đảm bảo nhận hàng: Trong ngày
                          </p>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white rounded-lg p-6 max-w-[470px] w-full mx-auto">
            <h2 className="text-lg font-medium mb-6">Thành tiền</h2>
            <div className="space-y-4">
              <div className="flex text-sm text-gray-500 pb-2 border-b">
                <span className="flex-1">SẢN PHẨM</span>
                <span className="w-16 text-center">SL</span>
                <span className="w-24 text-right">ĐƠN GIÁ</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="flex items-center flex-1 gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.size}</p>
                    </div>
                  </div>

                  <div className="w-16 flex justify-center items-center">
                    <div className="flex items-center border rounded">
                      <button
                        type="button"
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="w-24 text-right">
                    {item.price.toLocaleString()}đ
                  </div>
                </div>
              ))}

              <Button
                type="button"
                className="text-green-600 text-sm font-medium mt-4 underline decoration-green-600"
              >
                + Thêm sản phẩm
              </Button>

              <div className="border-t pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Tổng sản phẩm ({cartItems.length} sản phẩm)
                  </span>
                  <span>{total.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span>{shipping.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between text-base font-medium pt-2 border-t">
                  <span>Tổng đơn hàng</span>
                  <span>{grandTotal.toLocaleString()}đ</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-3">Phương thức thanh toán</h3>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="cod"
                                className="border-black-2 text-green-600 focus:ring-green-600"
                              />
                            </FormControl>
                            <FormLabel className="font-semibold text-base leading-[20.8px] text-black-2">
                              Thanh toán khi nhận hàng (C.O.D)
                            </FormLabel>
                          </FormItem>
                          <p className="text-[11px] leading-[14.3px] font-normal text-gray-2 ml-7">
                            Thanh toán trực tiếp bằng tiền mặt cho shipper khi
                            đã kiểm tra hàng thành công
                          </p>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 mt-6 font-light"
              >
                Tiến hành đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
