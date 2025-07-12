import SkillsPage from "@features/skillspage/SkillsPage";
import DetailLayout from "layouts/DetailLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const Skills: NextPageWithLayout = () => {
  return <SkillsPage />;
};

Skills.getLayout = function (page: ReactElement) {
  return <DetailLayout>{page}</DetailLayout>;
};

export default Skills;
