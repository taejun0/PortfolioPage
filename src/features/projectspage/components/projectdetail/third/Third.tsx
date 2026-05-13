"use client";

import * as S from "./Third.styled";
import AnimatedDetails from "./AnimatedDetails";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import {
  PROJECT_DETAIL_THIRD_UI,
  projectDetailChallengeSummary,
} from "@constants";

interface FeatureProps {
  stack: string[];
  features: {
    problem: string[];
    user: string[];
    admin?: string[];
  };
  roles: string[];
  challenges: {
    problem: string;
    solution: string;
    learnings: string;
  }[];
}

const U = PROJECT_DETAIL_THIRD_UI;
const categories = [...U.tabs];

const Third = ({ stack, features, roles, challenges }: FeatureProps) => {
  const [selected, setSelected] = useState(0);

  const stackContent = (
    <S.ContentSection>
      <h3>{U.stackHeading}</h3>
      <ul>
        {stack.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const featureContent = (
    <S.ContentSection>
      <h3>{U.featureHeading}</h3>
      <h4>{U.problemDef}</h4>
      <ul>
        {features.problem.map((item, idx) => (
          <li key={`p-${idx}`}>{item}</li>
        ))}
      </ul>
      <h4>{U.user}</h4>
      <ul>
        {features.user.map((item, idx) => (
          <li key={`u-${idx}`}>{item}</li>
        ))}
      </ul>
      {features.admin && <h4>{U.admin}</h4>}
      <ul>
        {features.admin?.map((item, idx) => (
          <li key={`a-${idx}`}>{item}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const roleContent = (
    <S.ContentSection>
      <h3>{U.roleHeading}</h3>
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const challengeContent = (
    <S.ContentSection>
      <h3>{U.challengeHeading}</h3>
      {challenges.map((challenge, idx) => (
        <AnimatedDetails
          key={idx}
          summary={projectDetailChallengeSummary(idx, challenges.length)}
        >
          <h4>{U.problemSituation}</h4>
          <p>{challenge.problem}</p>
          <h4>{U.solutionApproach}</h4>
          <p>{challenge.solution}</p>
          <h4>{U.learnings}</h4>
          <p>{challenge.learnings}</p>
        </AnimatedDetails>
      ))}
    </S.ContentSection>
  );

  const contents = [
    stackContent,
    featureContent,
    roleContent,
    challengeContent,
  ];

  return (
    <S.Wrapper>
      <S.CategorySelector>
        {categories.map((cat, idx) => (
          <S.CategoryButton
            key={cat}
            selected={selected === idx}
            onClick={() => setSelected(idx)}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            {cat}
          </S.CategoryButton>
        ))}
      </S.CategorySelector>
      <AnimatePresence mode="wait">
        <S.ContentWrapper
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {contents[selected]}
        </S.ContentWrapper>
      </AnimatePresence>
    </S.Wrapper>
  );
};

export default Third;
