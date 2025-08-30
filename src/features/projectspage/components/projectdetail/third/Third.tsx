"use client";

import * as S from "./Third.styled";
import AnimatedDetails from "./AnimatedDetails";

import { useState } from "react";

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

const categories = [
  "기술적 의사결정",
  "주요 기능",
  "담당 역할",
  "Challenge & Solution",
];

const Third = ({ stack, features, roles, challenges }: FeatureProps) => {
  const [selected, setSelected] = useState(0);

  const stackContent = (
    <S.ContentSection>
      <h3>기술적 의사결정</h3>
      <ul>
        {stack.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const featureContent = (
    <S.ContentSection>
      <h3>주요 기능</h3>
      <h4>문제 정의</h4>
      <ul>
        {features.problem.map((item, idx) => (
          <li key={`p-${idx}`}>{item}</li>
        ))}
      </ul>
      <h4>사용자</h4>
      <ul>
        {features.user.map((item, idx) => (
          <li key={`u-${idx}`}>{item}</li>
        ))}
      </ul>
      {features.admin && <h4>운영자</h4>}
      <ul>
        {features.admin?.map((item, idx) => (
          <li key={`a-${idx}`}>{item}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const roleContent = (
    <S.ContentSection>
      <h3>담당 역할</h3>
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
    </S.ContentSection>
  );

  const challengeContent = (
    <S.ContentSection>
      <h3>Challenge & Solution</h3>
      {challenges.map((challenge, idx) => (
        <AnimatedDetails
          key={idx}
          summary={`트러블슈팅 회고 (${idx + 1} / ${challenges.length})`}
        >
          <h4>문제 상황</h4>
          <p>{challenge.problem}</p>
          <h4>해결 시도 방법</h4>
          <p>{challenge.solution}</p>
          <h4>알게된 점</h4>
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
          >
            {cat}
          </S.CategoryButton>
        ))}
      </S.CategorySelector>
      <S.ContentWrapper>{contents[selected]}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Third;
