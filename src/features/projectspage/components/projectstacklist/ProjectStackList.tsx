"use client";

import * as S from "./ProjectStackList.styled";

import { useRouter } from "next/navigation";
import { stacks } from "lib/projectData";
import Image from "next/image";

interface Props {
  selectedCategory: string;
  onOpen?: (slug: string) => void;
}

const convertCategory = (selected: string) => {
  return selected === "All Projects" ? "ALL" : selected;
};

const ProjectStackList = ({ selectedCategory, onOpen }: Props) => {
  const category = convertCategory(selectedCategory);

  const filtered = stacks.filter(
    (item) => category === "ALL" || item.categories.includes(category)
  );

  const router = useRouter();

  return (
    <S.Grid>
      {filtered.map((item, index) => {
        const slug = encodeURIComponent(
          item.name.toLowerCase().replace(/\s+/g, "-")
        );

        const handleClick = () => {
          if (onOpen) onOpen(slug);
          else router.push(`/projects?slug=${slug}`);
        };

        return (
          <S.Card key={item.name} onClick={handleClick}>
            <S.Thumbnail>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // ✅ 추가
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </S.Thumbnail>
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
