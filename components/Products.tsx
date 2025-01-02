"use client";

import { Button } from "@/components/ui/button";
import useWindowSize from "@/hooks/useWindowSize";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Gạo St25 túi 5kg",
    sizes: "5kg / 10kg / 15kg",
    price: 120000,
    originalPrice: 145000,
    discount: 30,
    image: "/images/products/tui-gao.png",
  },
  {
    id: 2,
    name: "Gạo St25 túi 5kg",
    sizes: "5kg / 10kg / 15kg",
    price: 120000,
    image: "/images/products/tui-gao.png",
  },
  {
    id: 3,
    name: "Gạo St25 túi 5kg",
    sizes: "5kg / 10kg / 15kg",
    price: 120000,
    image: "/images/products/tui-gao.png",
  },
];

const Products = () => {
  const { width } = useWindowSize();

  console.log(width);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-secondary mb-12">Our Products</h2>

        <div className="relative">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
            {products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>

          {/* Navigation Arrows */}
          {width >= 1024 && products.length > 3 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-full h-10 w-10"
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
        </div>
      </div>
    </section>
  );
};

export default Products;
