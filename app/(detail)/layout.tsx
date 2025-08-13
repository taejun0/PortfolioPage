// app/(detail)/layout.tsx
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
