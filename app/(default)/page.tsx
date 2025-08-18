// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import MainPage from "@features/mainpage/MainPage";

export const metadata: Metadata = {
  title: "Main",
};

export default function Main() {
  return <MainPage />;
}
