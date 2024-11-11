import styled from "styled-components";

export const InputStyled = styled.input`
  border: none;
  outline: none;
  width: 50%;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 14px;
  color: #c0c0c0;

  @media (max-width: 1280px) {
    width: min(100%, 500px);
    padding: 30px;
    height: 10px;
  }
`;
