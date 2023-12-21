import styled from "styled-components";

export const InputStyled = styled.input.attrs({
    type: "text",
    placeholder: "Поиск по названию",
})`
  width: 260px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #E1E1E1;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 700;
  color: #4A4A4A;
  transition: all .3s ease;

  &:focus {
    width: 360px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #E1E1E1;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 700;
    color: #4A4A4A;

    &::placeholder {
      color: transparent;
    }
  }
`