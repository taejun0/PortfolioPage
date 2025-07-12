import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
