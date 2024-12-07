import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/products/green-rice.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl text-white mb-4">
              Đăng ký để nhận những tin tức mới nhất
            </h2>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Nhập email của bạn!"
                className="bg-white border-none text-gray-2 text-[14px] font-[400] leading-[18.2px]"
              />
              <Button className="bg-green-600 hover:bg-green-700 min-w-[120px] text-white font-light">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="bg-green-600 text-white py-16"
        style={{
          backgroundImage: "url('/images/backgrounds/footer-background.png')",
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-base font-bold mb-4 text-[16px] leading-[20.8px]">
                Về chúng tôi
              </h3>
              <ul className="space-y-2 text-sm font-light mb-4 text-[16px] leading-[20.8px]">
                <li>
                  <Link href="/about" className="hover:underline">
                    Về Gạo Hạt
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:underline">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Tuyển dụng
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-base font-bold mb-4 text-[16px] leading-[20.8px]">
                Chính sách & Điều khoản
              </h3>
              <ul className="space-y-2 text-sm font-light mb-4 text-[16px] leading-[20.8px]">
                <li>
                  <Link href="/policy/sales" className="hover:underline">
                    Chính sách bán hàng
                  </Link>
                </li>
                <li>
                  <Link href="/policy/shipping" className="hover:underline">
                    Chính sách giao hàng
                  </Link>
                </li>
                <li>
                  <Link href="/policy/payment" className="hover:underline">
                    Hình thức thanh toán
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-base font-bold mb-4 text-[16px] leading-[20.8px]">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-4 text-sm font-light mb-4 text-[16px] leading-[20.8px]">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  cskh.gaohat@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (+84) 38 9044 517
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  39/62 Đặng Thùy Trâm, P13, Bình Thạnh, TP.HCM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-700 text-gray-300 py-4 text-center text-sm">
        © Copyright 2023 Mediastep Software Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
