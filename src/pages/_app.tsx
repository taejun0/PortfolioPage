import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/GlobalStyle";
import { theme } from "@styles/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Head from "next/head";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>오태준 포트폴리오</title>
          <meta
            name="description"
            content="프론트엔드 개발자 오태준의 기술과 프로젝트를 소개하는 포트폴리오입니다."
          />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="/favicon.ico" />

          {/* optional: SNS 공유용 */}
          <meta property="og:title" content="오태준 포트폴리오" />
          <meta
            property="og:description"
            content="프론트엔드 개발자 오태준의 기술과 프로젝트를 소개합니다."
          />
          <meta
            property="og:image"
            content="/images/projectsImage/PortFolio.png"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.taejun0-portfolio.site"
          />
        </Head>

        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
