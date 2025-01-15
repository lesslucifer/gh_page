"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProducts } from "@/hooks/useProducts";
import ProductItem from "../ProductItem";

interface QuickAddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickAddProductModal({ isOpen, onClose }: QuickAddProductModalProps) {
  const { data: products } = useProducts();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-full bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium text-center">Thêm sản phẩm</DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto p-4">
          {products?.map((product) => {
            const sizeNumber = parseInt(product.unit?.replace(/\D/g, '') || '10');
            const basePrice = product.price;
            const originalPrice = basePrice * sizeNumber;
            
            return (
              <div key={product.code} className="flex justify-center">
                <ProductItem
                  {...product}
                  originalPrice={originalPrice}
                  price={originalPrice}
                  sizes={product.unit || '10kg'}
                />
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
} 