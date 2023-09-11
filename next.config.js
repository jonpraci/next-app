/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig

