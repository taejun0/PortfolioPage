import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  width: 100%;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const SectionLabel = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 2.5rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    line-height: 1.5;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 960px) {
    gap: 1.75rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 0.25rem;
  }

  @media (max-width: 600px) {
    gap: 1.25rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

export const Divider = styled.div`
  width: 4rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 1rem auto;

  @media (max-width: 480px) {
    width: 3rem;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding: 2.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
    gap: 1.5rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 1rem;
  object-fit: contain;
`;

export const ProjectImageWrapper = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }
`;

export const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
    padding-top: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const ProjectTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ProjectPeriod = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-top: -0.5rem;
`;

export const ProjectDesc = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1.0625rem;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  background-color: ${({ theme }) => theme.colors.gray050};
  padding: 0.375rem 0.625rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: all 0.2s ease;
`;

export const ProjectLink = styled.a`
  ${({ theme }) => theme.fonts.Pretendard};
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  padding: 0.25rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.0625rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const CustomNav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.375rem;
  }
`;

export const CustomPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.gray150};
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 4px;
  }
`;

export const GoProjects = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.25rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.0625rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
