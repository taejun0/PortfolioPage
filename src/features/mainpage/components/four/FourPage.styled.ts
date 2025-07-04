import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 3px);
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const Inner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2rem;
`;

export const ProjectCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 1rem;
  object-fit: contain;
`;

export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

export const ProjectPeriod = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray250};
`;

export const ProjectDesc = styled.p`
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

export const ProjectLink = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray350};
  margin-top: 0.5rem;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

export const CustomNav = styled.button`
  font-size: 1.5rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const CustomPagination = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;
  gap: 0.5rem;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.gray100};
    opacity: 0.5;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const GoProjects = styled.div`
  position: relative;

  cursor: pointer;
`;
