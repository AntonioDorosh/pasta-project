import React, { ReactNode } from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";

export const ModalWrapper = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      background={"rgba(0, 0, 0, 0.5)"}
      zIndex={1000}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={onClose}
    >
      {children}
    </Flex>
  );
};
