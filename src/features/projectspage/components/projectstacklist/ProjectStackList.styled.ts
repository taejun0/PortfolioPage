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
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.gray200};
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
  border-radius: 16px 16px 0 0;

  position: relative;
  overflow: hidden;
  
  img {
    transition: transform 0.3s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
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
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.6;
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
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
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
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.2s ease;
  
  ${Card}:hover & {
    border-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ViewDetail = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
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
  }
`;

// skeleton

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;


export const SkeletonCard = styled(Card)`
  pointer-events: none;
  border-color: ${({ theme }) => theme.colors.gray150};
  
  &:hover {
    transform: none;
  }
`;

export const SkThumb = styled.div`
  background: ${({ theme }) => theme.colors.gray150};
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 160px;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s infinite;
    width: 50%;
  }
`;

export const SkBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkLine = styled.div<{ w?: string; h?: string; r?: string }>`
  background: ${({ theme }) => theme.colors.gray150};
  position: relative;
  overflow: hidden;
  height: ${({ h }) => h ?? "14px"};
  width: ${({ w }) => w ?? "100%"};
  border-radius: ${({ r }) => r ?? "8px"};
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s infinite;
    width: 50%;
  }
`;

export const SkTagRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const SkTag = styled.div`
  background: ${({ theme }) => theme.colors.gray150};
  position: relative;
  overflow: hidden;
  height: 24px;
  width: 60px;
  border-radius: 8px;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s infinite;
    width: 50%;
  }
`;

