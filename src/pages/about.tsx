import AboutPage from "@features/aboutpage/AboutPage";
import DetailLayout from "layouts/DetailLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const About: NextPageWithLayout = () => {
  return <AboutPage />;
};

About.getLayout = function (page: ReactElement) {
  return <DetailLayout>{page}</DetailLayout>;
};

export default About;
