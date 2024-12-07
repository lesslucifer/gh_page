'use client';

import { useState } from 'react';
import { HeroContext } from './hero-context';
import { BackgroundCarousel } from '@/components/ui/background-carousel';
import { HeroContent } from './hero-content';

export const HeroWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <HeroContext.Provider value={{ currentSlide, setCurrentSlide }}>
      <BackgroundCarousel onSlideChange={setCurrentSlide} />
      <HeroContent />
    </HeroContext.Provider>
  );
};
