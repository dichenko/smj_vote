/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    // Отключаем проверку типов во время сборки для ускорения
    ignoreBuildErrors: true,
  },
  eslint: {
    // Отключаем проверку ESLint во время сборки
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
