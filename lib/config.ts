export const config = {
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  // Add other environment variables here
} as const;

// Type-safe config
export type Config = typeof config; 