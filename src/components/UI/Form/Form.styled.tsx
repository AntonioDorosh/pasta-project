import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 15px;
  padding: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: ${({ error }) => (error ? "2px solid red" : "1px solid #ccc")};
  background-color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

export const FormikButton = styled.button`
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;
