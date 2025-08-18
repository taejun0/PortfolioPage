// app/(detail)/about/page.tsx
import type { Metadata } from "next";
import AboutPage from "@features/aboutpage/AboutPage";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return <AboutPage />;
}
