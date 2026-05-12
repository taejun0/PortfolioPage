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
  margin: 1rem auto 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
    margin-top: 1.5rem;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 30%;
  height: 380px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  @media screen and (max-width: 800px) {
    width: 45%;
  }

  @media screen and (max-width: 510px) {
    height: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    height: 380px;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray050};

  img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 0.875rem;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const VelogBadge = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.blue100};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  white-space: nowrap;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.gray050};
  padding: 0.375rem 0.625rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.gray150};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`;

export const Date = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const ViewDetail = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.black};

    svg {
      transform: translateX(4px);
    }
  }
`;

export const SeriesContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 1rem auto 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const SeriesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(13, 13, 13, 0.08);
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    0 1px 2px rgba(13, 13, 13, 0.04),
    0 12px 40px -18px rgba(13, 13, 13, 0.12);
`;

export const SeriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.125rem 1.35rem 1.125rem 1.15rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gray050} 0%,
    ${({ theme }) => theme.colors.white} 65%
  );
  cursor: pointer;
  transition:
    background 0.22s ease,
    filter 0.22s ease;
  position: relative;

  &:hover {
    filter: brightness(0.995);
  }
`;

export const SeriesTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 0.35rem;
`;

export const SeriesTitle = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.0625rem;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SeriesCount = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.75rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray300};
  background: transparent;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(13, 13, 13, 0.1);
`;

export const SeriesPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0.65rem 1rem 1rem 1.35rem;
  gap: 0.45rem;
  border-top: 1px solid rgba(13, 13, 13, 0.06);
  background: ${({ theme }) => theme.colors.white};
`;

export const SeriesPostItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: ${({ theme }) => theme.colors.gray050};
  border: 1px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    border-color: rgba(13, 13, 13, 0.09);
    box-shadow: 0 4px 14px rgba(13, 13, 13, 0.06);
    transform: translateY(-1px);
  }
`;

export const SeriesPostTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.9375rem;
  letter-spacing: -0.02em;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  flex: 1;
  text-align: left;
`;

export const SeriesPostDate = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.gray250};
  margin-left: 0;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
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
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 200px;

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
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
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
