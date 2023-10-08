/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    NEXT_API_TOKEN: process.env.NEXT_API_TOKEN,
  },
};

module.exports = nextConfig;
