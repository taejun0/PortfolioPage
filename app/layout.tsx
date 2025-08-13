import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "오태준 포트폴리오",
  description:
    "프론트엔드 개발자 오태준의 기술과 프로젝트를 소개하는 포트폴리오입니다.",
  openGraph: {
    title: "오태준 포트폴리오",
    description: "프론트엔드 개발자 오태준의 기술과 프로젝트를 소개합니다.",
    type: "website",
    url: "https://www.taejun0-portfolio.site",
    images: [
      {
        url: "https://www.taejun0-portfolio.site/images/projectsImage/PortFolio.png",
      },
    ],
  },
  // 파비콘은 app/icon.* 로 자동 주입됨
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
