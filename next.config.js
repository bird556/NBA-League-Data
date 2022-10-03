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
  env: {
    BASE_URL: process.env.REACT_APP_NBAAPIKEY,
  },
};

module.exports = nextConfig;
