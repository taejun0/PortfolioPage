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
  gap: 2rem;

  @media (max-width: 960px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1.25rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Divider = styled.div`
  width: 4rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }

  @media (max-width: 480px) {
    width: 3rem;
    margin: 0 auto 1.25rem;
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
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

export const PostCard = styled.a`
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 430px) {
    gap: 0.25rem;
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};

  @media (max-width: 760px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;

export const PostDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray250};

  @media (max-width: 760px) {
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    font-size: 0.625rem;
  }

  @media (max-width: 430px) {
    font-size: 0.5rem;
  }
`;

export const PostDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  margin-top: 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;

  @media (max-width: 760px) {
    font-size: 0.75rem;
    margin-top: 0.375rem;
  }

  @media (max-width: 600px) {
    font-size: 0.625rem;
    margin-top: 0.25rem;
  }

  @media (max-width: 430px) {
    font-size: 0.5rem;
    margin-top: 0.125rem;
  }
`;

export const PostThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const BlogLink = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.25rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
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

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const LoadingText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
`;

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ArticleCard = styled.a`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  width: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ArticleImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }
`;

export const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ArticleTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 1.75rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const ArticleDate = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray250};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ArticleStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.25rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const StatItem = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ArticleDesc = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.7;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const DescriptionSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media (max-width: 960px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const DescriptionText = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;
