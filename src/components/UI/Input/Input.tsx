import React from "react";
import { InputStyled } from "@/components/UI/Input/Input.styled";
import { IInputProps } from "@/components/UI/Input/type";

export const Input = ({ ...props }: IInputProps) => {
  return <InputStyled {...props} />;
};
