import * as S from "./ProjectStackList.styled";

import { useRouter } from "next/router";
import { stacks } from "lib/projectData";
import Image from "next/image";

interface Props {
  selectedCategory: string;
}

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
            onClick={() =>
              router.push(`/projects?slug=${slug}`, undefined, {
                shallow: true,
              })
            }
          >
            <S.Thumbnail>
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
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
