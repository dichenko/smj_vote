/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'telegram.org'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    // Отключаем предупреждения ESLint во время сборки
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем проверку типов во время сборки
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
