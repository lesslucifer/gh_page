'use client';

import { createContext, useContext } from 'react';

interface HeroContextType {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const useHeroContext = () => {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error('useHeroContext must be used within a HeroProvider');
  }
  return context;
};
