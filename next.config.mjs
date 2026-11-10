/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // keep the old addresses working, and match the original brahmamandir.com URLs
  async redirects() {
    return [
      { source: "/lord-brahma", destination: "/brahmaji", permanent: true },
      { source: "/guruji", destination: "/guruji-maharaj", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/gallery-brahma-mandir", destination: "/gallery", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
  images: {
    // serve AVIF (smallest) with WebP fallback, cached for 30 days
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
};
export default nextConfig;
