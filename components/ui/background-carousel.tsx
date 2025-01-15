'use client';

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

const backgroundImages = [
  "/images/backgrounds/background.png",
  "/images/backgrounds/background2.png",
  "/images/backgrounds/background3.png",
];

const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

interface BackgroundCarouselProps {
  onSlideChange?: (index: number) => void;
}

export const BackgroundCarousel = ({ onSlideChange }: BackgroundCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(currentIndex);
      onSlideChange?.(currentIndex);
    });
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(scrollNext, AUTO_SCROLL_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [emblaApi, scrollNext]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {backgroundImages.map((image, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={image}
                alt={`Rice background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-48 right-24 flex flex-col gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index ? "bg-white h-4" : "bg-white/50"
            } w-2`}
          />
        ))}
      </div>
    </div>
  );
};
