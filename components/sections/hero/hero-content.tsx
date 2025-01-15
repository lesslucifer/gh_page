'use client';

import { Button } from "@/components/ui/button";
import { useHeroContext } from "./hero-context";
import { useEffect, useState } from "react";

const titles = [
  "Gạo chuẩn cơm ngon <br /> Việt Nam",
  "Câu chuyện được kể từ <br />đất mẹ",
  "Tự hào hương vị Việt"
];

export const HeroContent = () => {
  const { currentSlide } = useHeroContext();
  const [isChanging, setIsChanging] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState(titles[0]);

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Products section not found');
    }
  };

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => {
      setDisplayedTitle(titles[currentSlide]);
      setIsChanging(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative container mx-auto px-4 h-full flex items-center z-10">
      <div className="max-w-2xl text-white relative">
        <div className="overflow-hidden">
          <h1 
            className={`text-3xl md:text-4xl lg:text-[48px] font-[600] mb-3 md:mb-4 leading-[1.1] lg:leading-[52.8px] transition-all duration-600 ease-in-out ${
              isChanging ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
            dangerouslySetInnerHTML={{ __html: displayedTitle }}
          />
        </div>
        <p className="text-base leading-[20.8px] mb-6 md:mb-8 font-light">
          Gạo Hạt được sản xuất từ các giống lúa riêng, giống đặc sản và thuần
          chủng. <br />
          Có nguồn gốc từ vùng nguyên liệu canh tác theo quy trình bền vững
          SRP.
        </p>
        <Button
          variant="outline"
          className="bg-white text-[#717275] hover:bg-white/90 w-[175px] h-[54px] font-light text-[20px] leading-[22px] border-none relative z-20"
          onClick={handleScrollToProducts}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
};
