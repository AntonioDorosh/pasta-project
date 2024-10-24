import React, { PropsWithChildren } from "react";
import { ContainerStyled } from "@/components/Layouts/Container/Container.styled";

export const Container = ({ children }: PropsWithChildren) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
