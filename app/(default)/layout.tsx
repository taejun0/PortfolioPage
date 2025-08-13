// app/(default)/layout.tsx
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import ScrollIndicator from "@features/mainpage/components/ScrollIndecator";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <main>{children}</main>
      <Footer />
    </>
  );
}
