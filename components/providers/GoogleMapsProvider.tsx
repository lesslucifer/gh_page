"use client";

import { config } from '@/lib/config';
import { APIProvider } from '@vis.gl/react-google-maps';

export function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={config.googleMapsApiKey}>
      {children}
    </APIProvider>
  );
} 