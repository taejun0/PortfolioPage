// next.config.js
// Babel 경고 필터링
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = function (...args) {
    const message = args[0];
    // Babel의 "code generator has deoptimised" 경고 필터링
    if (
      typeof message === "string" &&
      message.includes("code generator has deoptimised")
    ) {
      return; // 경고 무시
    }
    // 다른 경고는 정상 출력
    originalWarn.apply(console, args);
  };
}

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
  // 로그 레벨 조정 (선택사항)
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

module.exports = nextConfig;
