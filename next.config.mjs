/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeDetection: true
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

export default nextConfig;
