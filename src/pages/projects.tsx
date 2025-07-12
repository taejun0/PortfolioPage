import ProjectsPage from "@features/projectspage/ProjectsPage";
import DetailLayout from "layouts/DetailLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/page";

const Projects: NextPageWithLayout = () => {
  return <ProjectsPage />;
};

Projects.getLayout = function (page: ReactElement) {
  return <DetailLayout>{page}</DetailLayout>;
};

export default Projects;
