import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  color: #555;
  background-color: rgb(255, 255, 255);
  background-image: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(247, 247, 247);
  }
`;

export const OptionStyled = styled.option<{ $isActive?: boolean }>`
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  color: ${({ $isActive }) => ($isActive ? "#FE5F00" : "#000")};
  background-color: rgb(247, 247, 247);
  background-image: none;
  height: 50px;
  padding: 15px;
`;
