import React, { PropsWithChildren } from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import pizzaLogo from "@/assets/images/pizza-logo.png";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { px2vw, remCalc } from "@/utils";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      as={"header"}
      alignItems={"center"}
      marginBottom={px2vw(70)}
      justifyContent={"space-between"}
    >
      <Flex>
        <img src={pizzaLogo} alt={"pizza-logo"} />
        <Typography
          marginLeft={px2vw(15)}
          fontSize={remCalc(24)}
          fontWeight={800}
          textTransform={"uppercase"}
        >
          Pasta Project
        </Typography>
      </Flex>
      {children}
    </Flex>
  );
};
