import React, { FC } from "react";
import Flex from "../../../../styles/Flex/Flex.ts";
import { px2vw, remCalc } from "../../../../utils";
import { Button } from "../Button.tsx";
import Text from "../../../../styles/Text/Text.ts";

type QuantityControlProps = {
  increase: () => void;
  decrease: () => void;
  quantity: number;
};

export const QuantityButtons: FC<QuantityControlProps> = ({
  increase,
  decrease,
  quantity,
}) => (
  <Flex alignItems={"center"} gap={px2vw(15)}>
    <Button onClick={decrease}>
      <img src="/src/assets/minus.svg" alt="minus" />
    </Button>
    <Text fontSize={remCalc(22)} fontWeight={700}>
      {quantity}
    </Text>
    <Button onClick={increase}>
      <img src="src/assets/plus.svg" alt="plus" />
    </Button>
  </Flex>
);
