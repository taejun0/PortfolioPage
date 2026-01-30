import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  padding: 2.5rem 2rem;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

export const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
  }
`;

export const SemiBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const SemiTitle2 = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SemiContent = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray200};
  line-height: 1.7;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  font-size: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
    text-decoration: underline;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

export const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ViewButton = styled.a`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-color: ${({ theme }) => theme.colors.gray300};
  }
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
    padding: 0.375rem 0.875rem;
  }
`;

export const LinksSwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  
  .swiper {
    width: 100%;
  }
`;

export const CustomNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &.links-prev {
    left: 10px;
  }
  
  &.links-next {
    right: 10px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
    
    &.links-prev {
      left: 5px;
    }
    
    &.links-next {
      right: 5px;
    }
  }
`;

export const IframeWrapper = styled.div<{ $isMobile?: boolean }>`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.gray100};
  ${({ $isMobile }) =>
    $isMobile
      ? `
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 9 / 16;
  `
      : ""}
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    ${({ $isMobile }) =>
      $isMobile
        ? `
      max-width: 100%;
      aspect-ratio: 9 / 16;
    `
        : ""}
  }
`;

export const Iframe = styled.iframe<{ $isMobile?: boolean }>`
  width: 100%;
  border: none;
  display: block;
  ${({ $isMobile }) =>
    $isMobile
      ? `
    height: 100%;
    aspect-ratio: 9 / 16;
  `
      : `
    height: 600px;
    
    @media (max-width: 1024px) {
      height: 500px;
    }
    
    @media (max-width: 768px) {
      height: 400px;
    }
    
    @media (max-width: 480px) {
      height: 300px;
    }
  `}
`;
