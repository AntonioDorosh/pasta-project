import styled from "styled-components";

export const ModalStyled = styled.article`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
`;
export const ModalWrapper = styled.div`
  position: relative;
  width: min(100%, 600px);
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;


