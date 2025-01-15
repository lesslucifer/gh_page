"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import Link from "next/link";

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderCode?: string;
}

export function OrderSuccessModal({
  isOpen,
  onClose,
  orderCode,
}: OrderSuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[90vw] lg:max-w-[960px] bg-white p-0 lg:[&>button]:text-white max-h-[90vh] overflow-y-auto"
        title=""
      >
        <VisuallyHidden.Root>
          <DialogTitle>Đặt hàng thành công</DialogTitle>
          <DialogDescription>
            Thông tin chi tiết đơn hàng của bạn
          </DialogDescription>
        </VisuallyHidden.Root>

        <div className="flex flex-col lg:flex-row">
          {/* Order Success Section */}
          <div className="flex-1 p-4 lg:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 lg:w-24 lg:h-24 mb-4 lg:mb-6 relative">
                <Image
                  src="/images/backgrounds/success.png"
                  alt="Success"
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-medium mb-2">
                Đặt hàng thành công!
              </h2>
              <p className="text-gray-500 mb-2">
                Bạn đã đặt thành công đơn hàng{" "}
                <span className="text-green-600 font-medium underline">
                  {orderCode}
                </span>
              </p>
              <p className="text-gray-500 mb-6">
                Bấm vào link bên dưới để nhận thêm nhiều ưu đãi cho những đơn
                hàng sau từ Gạo Hạt
              </p>

              <Link
                href="/"
                className="text-green-600 underline decoration-green-600 mb-6"
                onClick={onClose}
              >
                Link ưu đãi cho lần đặt hàng tiếp theo
              </Link>

              <div className="text-sm text-gray-500">
                Nếu có bất kì thắc mắc hoặc muốn chỉnh sửa, thay đổi thông tin
                đơn hàng, vui lòng liên hệ với chúng tôi
              </div>
            </div>
          </div>

          {/* Sales Agent Section */}
          <div className="flex-1 bg-green-600 text-white p-4 lg:p-8 lg:flex lg:flex-col lg:justify-center lg:rounded-r-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-[280px] h-[160px] lg:w-[420px] lg:h-[240px] mb-4 relative">
                <Image
                  src="/images/backgrounds/partner.png"
                  alt="Sales Agent"
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-4xl font-semibold mb-2">
                Trở thành cộng tác viên bán hàng của Gạo Hạt
              </h2>
              <p className="text-white mb-6 text-sm font-light">
                Trở thành cộng tác viên bán hàng của Gạo Hạt với chương trình
                lên đến 40k/đơn hàng
              </p>

              <Button
                variant="outline"
                className="mb-8 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-600 bg-white"
                onClick={onClose}
              >
                Tham gia ngay
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
