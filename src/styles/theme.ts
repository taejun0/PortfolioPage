// src/styles/theme.ts
export const theme = {
  colors: {
    primary: "#0070f3",

    orange100: "#FFE8CC",
    blue100: "#D6EAF8",
    pink100: "#FDE2E4",
    green100: "#D4EFDF",

    black: "#000000",
    black100: "#374151",

    gray050: "#FAFAFA",
    gray100: "#BFBFBF",
    gray150: "#D9D9D9",
    gray200: "#737373",
    gray250: "#A6A6A6",
    gray300: "#404040",
    gray350: "#2B2B2B",
    gray400: "#0D0D0D",

    BG100: "#FAFAFA",
    white: "#ffffff",
  },
  fonts: {
    Pretendard: "'Pretendard'",
    weights: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
};

export type ThemeType = typeof theme;
