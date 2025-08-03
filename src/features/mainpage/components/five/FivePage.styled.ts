import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  padding: 2rem;
  gap: 2rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;

  @media (max-width: 760px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 2rem;
  }
`;

export const Inner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
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
  gap: 0.25rem;
  max-width: 300px;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

export const PostDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray250};
`;

export const PostDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  margin-top: 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export const PostThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
`;
