import React from "react";
import {InputStyled} from "@/components/UI/Input/Input.styled";
import {CustomInputProps} from "@/components/UI/Input/type";

export const Input = ({...props}: CustomInputProps) => {
  return <InputStyled {...props} />;
};
