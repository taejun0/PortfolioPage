"use client";

import * as S from "./ProjectDetail.styled";
import { useEffect } from "react";

import { stacks } from "lib/projectData";

import { IoIosClose } from "react-icons/io";

import First from "./first/First";
import Second from "./second/Second";
import Third from "./third/Third";
import Four from "./fort/Four";

interface Props {
  slug: string;
  onClose: () => void;
}

const ProjectDetailModal = ({ slug, onClose }: Props) => {
  const project = stacks.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <First
          projectName={project.name}
          projectdetailDescription={project.detailDescription}
        />
        <S.CloseButton onClick={onClose}>
          <IoIosClose />
        </S.CloseButton>
        <Second SemiInfo={project.SemiInfo} overview={project.overview} />
        <Third
          stack={project.stack}
          features={project.features}
          roles={project.roles}
          challenges={project.challenges}
        />
        <Four onClose={onClose} />
      </S.ModalBox>
    </S.Backdrop>
  );
};

export default ProjectDetailModal;
