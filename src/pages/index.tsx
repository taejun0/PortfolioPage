import MainPage from "@features/mainpage/MainPage";
import DefaultLayout from "layouts/DefaultLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const Index: NextPageWithLayout = () => {
  return <MainPage />;
};

Index.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Index;
