// Babel 경고 필터링 (가장 먼저 실행)
if (typeof process !== "undefined" && process.env.NODE_ENV !== "test") {
  const originalWarn = console.warn;
  console.warn = function (...args) {
    const message = args[0];
    if (
      typeof message === "string" &&
      (message.includes("code generator has deoptimised") ||
        message.includes("exceeds the max of 500KB"))
    ) {
      return; // Babel 경고 무시
    }
    originalWarn.apply(console, args);
  };
}

module.exports = {
  presets: ["next/babel"],
  plugins: ["@emotion"],
  // 큰 파일 경고 억제
  compact: false,
  minified: false,
};
