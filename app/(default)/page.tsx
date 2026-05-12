// app/(default)/page.tsx — 메인 랜딩
import type { Metadata } from "next";
import MainPage from "@features/mainpage/MainPage";

export const metadata: Metadata = {
  title: "Main",
};

export default function Main() {
  return <MainPage />;
}
