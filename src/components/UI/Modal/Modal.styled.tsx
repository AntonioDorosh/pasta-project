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
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ModalWrapper = styled.div`
  position: relative;
  width: 50%;
  min-height: 50%;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.2);
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

  img {
    width: 20px;
    height: 20px;
  }
`;
