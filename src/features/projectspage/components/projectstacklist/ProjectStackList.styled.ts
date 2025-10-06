import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Grid = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  width: 30%;
  height: 320px;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 800px) {
    width: 45%;
  }

  @media screen and (max-width: 510px) {
    height: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    height: 320px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 1rem 1rem 0 0;

  position: relative;
  overflow: hidden;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 1.25rem;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  font-size: 1rem;
`;

export const Featured = styled.div`
  position: absolute;

  top: 10px;
  right: 12px;

  background-color: rgba(255, 255, 255, 0.6);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.black};
  font-size: 0.75rem;
`;

export const ViewDetail = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1rem;

  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

// skeleton

const shimmer = keyframes`
  0% { transform: translateX(-60%); }
  100% { transform: translateX(120%); }
`;

const skeletonBg = `
  background: #e9ecef;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
`;

const Shimmer = styled.span`
  position: absolute;
  inset: 0;
  transform: translateX(-60%);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: ${shimmer} 1.4s infinite;
`;

export const SkeletonCard = styled(Card)`
  pointer-events: none;
`;

export const SkThumb = styled.div`
  ${skeletonBg}
  width: 100%;
  aspect-ratio: 16/10;
  & > ${Shimmer} {
    display: block;
  }
`;

export const SkBody = styled.div`
  padding: 16px;
`;

export const SkLine = styled.div<{ w?: string; h?: string; r?: string }>`
  ${skeletonBg}
  height: ${({ h }) => h ?? "14px"};
  width: ${({ w }) => w ?? "100%"};
  border-radius: ${({ r }) => r ?? "6px"};
  margin-bottom: 10px;

  & > ${Shimmer} {
    display: block;
  }
`;

export const SkTagRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SkTag = styled.div`
  ${skeletonBg}
  height: 22px;
  width: 60px;
  border-radius: 999px;

  & > ${Shimmer} {
    display: block;
  }
`;

// 재사용용 Shimmer export
export { Shimmer };
