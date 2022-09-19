/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'staticc.sportskeeda.com',
      'api.sofascore.app',
      'about.underarmour.com',
      'a4.espncdn.com',
      'i.pinimg.com',
      'media.gettyimages.com',
    ],
  },
};

module.exports = nextConfig;
