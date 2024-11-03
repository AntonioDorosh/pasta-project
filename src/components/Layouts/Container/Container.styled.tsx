import styled from "styled-components";

export const ContainerStyled = styled.div<{ $bgColor?: string }>`
  width: calc(80% - 40px);
  margin: 40px auto;
  padding: 30px;
  border-radius: 30px;
  background-color: ${({ $bgColor }) => ($bgColor ? "#F4F1EE" : "#FFFFFF")};
`;
