// Babel 경고 메시지 필터링
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

