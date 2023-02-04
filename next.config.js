/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
