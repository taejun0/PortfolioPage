import * as S from "./ProjectStackList.styled";

import { useRouter } from "next/router";

interface Props {
  selectedCategory: string;
}

interface ProjectsStack {
  name: string;
  description: string;
  categories: string[];
  feature: boolean;
  image: string;
}

const stacks: ProjectsStack[] = [
  {
    name: "D-order",
    description: "행사/축제 모바일 주문 및 주점 운영 서비스",
    categories: ["React", "TypeScript", "Team"],
    feature: true,
    image: "/images/projectsImage/D-order.png",
  },
  {
    name: "동아리랑",
    description: "교내 동아리 정보와 공연일정을 한눈에, 동아리랑",
    categories: ["React", "JavaScript", "Team"],
    feature: false,
    image: "/images/projectsImage/DongBak.png",
  },
  {
    name: "SMART",
    description:
      "2025 동국대학교 캡스톤 디자인 작품, AI 기반 병사 체력 훈련 서비스",
    categories: ["React", "JavaScript", "AI", "Solo"],
    feature: true,
    image: "/images/projectsImage/SMART.png",
  },
  {
    name: "포트폴리오 사이트",
    description: "제 자신을 표현하고 소개하는 사이트입니다",
    categories: ["React", "TypeScript", "Next.js", "Solo"],
    feature: true,
    image: "/images/projectsImage/PortFolio.png",
  },
];

const convertCategory = (selected: string) => {
  return selected === "All Projects" ? "ALL" : selected;
};

const ProjectStackList = ({ selectedCategory }: Props) => {
  const category = convertCategory(selectedCategory);

  const filtered = stacks.filter(
    (item) => category === "ALL" || item.categories.includes(category)
  );

  const router = useRouter();

  return (
    <S.Grid>
      {filtered.map((item) => {
        const slug = encodeURIComponent(
          item.name.toLowerCase().replace(/\s+/g, "-")
        );

        return (
          <S.Card
            key={item.name}
            onClick={() => router.push(`/project/${slug}`)}
          >
            <S.Thumbnail src={item.image} alt={item.name} />
            {item.feature && <S.Featured>featured</S.Featured>}

            <S.Container>
              <S.Title>{item.name}</S.Title>
              <S.Desc>{item.description}</S.Desc>

              <S.TagContainer>
                {item.categories.map((tag) => (
                  <S.Tag key={tag}>#{tag}</S.Tag>
                ))}
              </S.TagContainer>

              <S.ViewDetail>View Details {"==>"}</S.ViewDetail>
            </S.Container>
          </S.Card>
        );
      })}
    </S.Grid>
  );
};

export default ProjectStackList;
