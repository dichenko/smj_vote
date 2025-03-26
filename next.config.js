/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    // Отключаем проверку типов во время сборки для ускорения
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
