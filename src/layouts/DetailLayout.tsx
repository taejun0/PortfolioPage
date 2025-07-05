import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

const DetailLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default DetailLayout;
