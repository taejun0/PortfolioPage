import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Grid = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 30%;
  height: 320px;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.gray200};
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
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
  
  img {
    transition: transform 0.3s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray200};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Featured = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 0.75rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.gray050};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  
  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ViewDetail = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
  transition: all 0.2s ease;
  
  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.black};
    transform: translateX(-4px);
  }
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
