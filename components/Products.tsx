"use client";

import { useProducts } from "@/hooks/useProducts";
import { Button } from "./ui/button";
import ProductItem from "./ProductItem";
import { useEffect, useState, useRef } from "react";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    if (!products) return;
    setCurrentIndex((prev) => 
      prev + 3 >= products.length ? 0 : prev + 3
    );
  };

  const scrollToPrev = () => {
    if (!products) return;
    setCurrentIndex((prev) => 
      prev - 3 < 0 ? Math.max(0, products.length - 3) : prev - 3
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const DISCOUNT = 0;
  const displayProducts = width >= 768 
    ? products?.slice(currentIndex, currentIndex + 3)
    : products;

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-secondary mb-12 text-center">Our Products</h2>
        <div className="relative">
          {/* Navigation Arrows - only show on desktop */}
          {width >= 768 && products && products.length > 3 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-full h-10 w-10"
                onClick={scrollToPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 rounded-full h-10 w-10"
                onClick={scrollToNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Button>
            </>
          )}
          
          <div 
            ref={containerRef}
            className="flex flex-col items-center md:flex-row md:justify-center gap-8 transition-all duration-300 ease-in-out"
          >
            {displayProducts?.map((product) => {
              const sizeNumber = parseInt(product.unit?.replace(/\D/g, '') || '10');
              const basePrice = product.price;
              const originalPrice = basePrice * sizeNumber;
              const discountedPrice = originalPrice - (originalPrice * DISCOUNT / 100);
              
              return (
                <ProductItem
                  key={product.code}
                  {...product}
                  discount={DISCOUNT === 0 ? undefined : DISCOUNT}
                  originalPrice={originalPrice}
                  price={discountedPrice}
                  sizes={product.unit || '10kg'}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
