import AboutPage from "@features/aboutpage/AboutPage";
import DefaultLayout from "layouts/DefaultLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const About: NextPageWithLayout = () => {
  return <AboutPage />;
};

About.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default About;
