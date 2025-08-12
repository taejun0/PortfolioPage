// next.config.js
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["velog.velcdn.com"],
  },
};

module.exports = nextConfig;
