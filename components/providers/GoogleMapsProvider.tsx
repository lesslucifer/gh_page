"use client";

// import { config } from '@/lib/config';
import { APIProvider } from '@vis.gl/react-google-maps';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
export function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={apiKey!}>
      {children}
    </APIProvider>
  );
} 