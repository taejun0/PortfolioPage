// next.config.js
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
      },
      { protocol: "https", hostname: "www.taejun0-portfolio.site" },
    ],
  },
};

module.exports = nextConfig;
