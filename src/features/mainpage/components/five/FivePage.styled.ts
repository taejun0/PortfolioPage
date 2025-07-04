import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 4px);
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const Inner = styled.div`
  width: 80%;
  display: flex;
  gap: 2rem;
`;

export const PostCard = styled.a`
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  text-decoration: none;
  gap: 0.25rem;

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
