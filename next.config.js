/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  }, 
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
