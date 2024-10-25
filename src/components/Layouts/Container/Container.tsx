import React, { PropsWithChildren } from "react";
import { ContainerStyled } from "@/components/Layouts/Container/Container.styled";

type ContainerProps = PropsWithChildren & {
  $bgColor?: string;
};

export const Container = ({ children, $bgColor }: ContainerProps) => {
  return <ContainerStyled $bgColor={$bgColor}>{children}</ContainerStyled>;
};
