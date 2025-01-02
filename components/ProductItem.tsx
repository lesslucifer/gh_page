import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductItemProps {
  id: number;
  name: string;
  sizes: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
}

const ProductItem = ({
  id,
  name,
  sizes,
  price,
  originalPrice,
  discount,
  image,
}: ProductItemProps) => {
  return (
    <Card key={id} className="relative border shadow-md w-[370px] h-[524px]">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute right-4 top-4 z-10 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-sm font-medium text-gray-3">
          -{discount}%
        </div>
      )}

      <CardContent className="p-6">
        {/* Product Image */}
        <div className="mb-4 relative h-[300px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="text-xl mb-2 text-gray-secondary">{name}</h3>
          <p className="text-gray-2 mb-4">{sizes}</p>
          <div className="flex justify-center items-center gap-2">
            {originalPrice && (
              <span className="text-gray-400 line-through">
                {originalPrice.toLocaleString()}đ
              </span>
            )}
            <span className="text-xl font-semibold">
              {price.toLocaleString()}đ
            </span>
          </div>

          <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
            Mua ngay
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
