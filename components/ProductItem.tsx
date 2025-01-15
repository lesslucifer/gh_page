"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCartStore } from "@/stores/useCartStore";
import toast from "react-hot-toast";
import { ProductLogo } from "@/types/product";

interface ProductItemProps {
  code: string;
  name: string;
  sizes: string;
  price: number;
  description: string;
  logo?: ProductLogo;
  originalPrice: number;
  discount?: number;
}

const ProductItem = ({
  code,
  name,
  sizes,
  price,
  description,
  logo,
  originalPrice,
  discount,
}: ProductItemProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      code,
      name,
      price,
      sizes,
      image: logo?.medium || "/images/products/tui-gao.png",
    });

    toast.success(`Đã thêm ${name} vào giỏ hàng`, {
      style: {
        border: "1px solid #22c55e",
        padding: "16px",
        color: "#22c55e",
      },
    });
  };

  return (
    <Card className="relative border border-[#AEAEB2] shadow-md w-[370px] min-h-[524px] flex flex-col">
      {/* Discount Badge */}
      {discount && discount > 0 && (
        <div className="absolute right-4 top-4 z-10 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-sm font-medium text-gray-3">
          -{discount}%
        </div>
      )}

      <CardContent className="p-6 flex flex-col flex-1">
        {/* Product Image */}
        <div className="mb-4 relative h-[250px]">
          <Image
            src={logo?.medium || "/images/products/tui-gao.png"}
            alt={name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 text-center">
          <div className="flex-1">
            <h3 className="text-xl mb-2 text-gray-secondary line-clamp-1">{name}</h3>
            <p className="text-gray-500 text-sm mb-3 line-clamp-2">
              {description}
            </p>
            <p className="text-gray-2 mb-3">{sizes}</p>
          </div>

          <div className="mt-auto">
            <div className="flex justify-center items-center gap-2 mb-4">
              {discount && discount > 0 && (
                <span className="text-gray-400 line-through">
                  {originalPrice.toLocaleString()}đ
                </span>
              )}
              <span className="text-xl font-semibold">
                {price.toLocaleString()}đ
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white hover:bg-green-700"
            >
              Mua ngay
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
