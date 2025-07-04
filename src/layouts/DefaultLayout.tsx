import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import ScrollIndicator from "@features/mainpage/components/ScrollIndecator";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <ScrollIndicator />
    <main>{children}</main>
    <Footer />
  </>
);

export default DefaultLayout;
