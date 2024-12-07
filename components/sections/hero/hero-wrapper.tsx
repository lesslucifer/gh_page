'use client';

import { useState, type ReactNode } from 'react';
import { HeroContext } from './hero-context';
import { BackgroundCarousel } from '@/components/ui/background-carousel';
import { HeroContent } from './hero-content';

interface HeroWrapperProps {
  children?: ReactNode;
}

export const HeroWrapper: React.FC<HeroWrapperProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <HeroContext.Provider value={{ currentSlide, setCurrentSlide }}>
      <BackgroundCarousel onSlideChange={setCurrentSlide} />
      <HeroContent />
    </HeroContext.Provider>
  );
};
