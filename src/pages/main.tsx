import MainPage from "@features/mainpage/MainPage";
import DefaultLayout from "layouts/DefaultLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const Main: NextPageWithLayout = () => {
  return <MainPage />;
};

Main.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Main;
