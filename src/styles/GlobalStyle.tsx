import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Pretendard", sans-serif;
        background-color: #ffffff;
        color: #111111;
      }
    `}
  />
);

export default GlobalStyle;
