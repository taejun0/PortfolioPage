// src/styles/theme.ts
export const theme = {
  colors: {
    primary: "#0070f3",
    gray100: "#f5f5f5",
    black: "#000000",
    black100: "#374151",
    white: "#ffffff",
  },
  fonts: {
    heading: "'Pretendard'",
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
