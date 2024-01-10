import styled from "styled-components";

export const ValidationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ValidationInput = styled.input<{ $borderColor?: string }>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({$borderColor}) => $borderColor ? $borderColor : '#ccc'};
  padding: 0 20px;
  font-size: 18px;
  line-height: 22px;
  color: #B6B6B6;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #FE5F1E;
  }
`;

export const ValidationButton = styled.button.attrs({
    type: "submit",
})`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #FE5F1E;
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #EB5A1E;
  }

  &:active {
    background-color: #FE5F1E;
  }

  &:disabled {
    background-color: #E0E0E0;
    color: #9E9E9E;
    cursor: not-allowed;
  }
`;
