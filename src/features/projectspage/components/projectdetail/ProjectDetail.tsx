"use client";

import * as S from "./ProjectDetail.styled";
import { useEffect } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <S.Backdrop
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <S.ModalBox
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <First
            projectName={project.name}
            overview={project.overview}
          />
          <S.CloseButton
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoIosClose />
          </S.CloseButton>
          <Second
            SemiInfo={project.SemiInfo}
            overview={project.overview}
            projectName={project.name}
          />
          <Third
            stack={project.stack}
            features={project.features}
            roles={project.roles}
            challenges={project.challenges}
          />
          <Four onClose={onClose} />
        </S.ModalBox>
      </S.Backdrop>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
