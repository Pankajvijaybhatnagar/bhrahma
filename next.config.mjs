/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // serve AVIF (smallest) with WebP fallback, cached for 30 days
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
};
export default nextConfig;
