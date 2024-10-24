import React from "react";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";
import { TButtonProps } from "@/components/UI/Button/type";

export const Button = ({ children, $isDisabled, ...rest }: TButtonProps) => {
  return (
    <ButtonStyled disabled={$isDisabled} {...rest}>
      {children}
    </ButtonStyled>
  );
};
