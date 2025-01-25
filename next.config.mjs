/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'vi'],
  //   localeDetection: true
  // },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['vnr.concon.vn'], // Add your API domain if loading images from there
  },
};

export default nextConfig;
