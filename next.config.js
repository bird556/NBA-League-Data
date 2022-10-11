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

const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config({
  path: '.env',
});
module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
