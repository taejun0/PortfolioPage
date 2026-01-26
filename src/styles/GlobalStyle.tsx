import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${[100, 200, 300, 400, 500, 600, 700, 800, 900]
        .map(
          (weight) => `
        @font-face {
          font-family: 'Pretendard';
          font-style: normal;
          font-weight: ${weight};
          font-display: swap;
          src: 
            url('/fonts/pretendard/woff2/Pretendard-${getWeightName(
              weight
            )}.woff2') format('woff2'),
            url('/fonts/pretendard/woff/Pretendard-${getWeightName(
              weight
            )}.woff') format('woff'),
            url('/fonts/pretendard/otf/Pretendard-${getWeightName(
              weight
            )}.otf') format('opentype'),
            url('/fonts/pretendard/ttf/Pretendard-${getWeightName(
              weight
            )}.ttf') format('truetype');
        }
      `
        )
        .join("")}

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: #000000;
        scroll-behavior: smooth;
      }

      body {
        font-family: "Pretendard", sans-serif;
        background-color: #ffffff;
        color: #1a1a1a;
      }

      html,
      body,
      #__next {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
      }
    `}
  />
);

function getWeightName(weight: number) {
  const map: Record<number, string> = {
    100: "Thin",
    200: "ExtraLight",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "SemiBold",
    700: "Bold",
    800: "ExtraBold",
    900: "Black",
  };
  return map[weight];
}

export default GlobalStyle;
