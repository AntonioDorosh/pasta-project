import React from "react";
import { px2vw, remCalc } from "@/utils";
import { PRODUCT_CATEGORIES } from "@/shared/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import Typography from "@/shared/styles/styled-components/Typography/Typography";

export const CurrentCategory = ({
  selectedCategory,
}: {
  selectedCategory: number;
}) => {
  const currentCategory =
    selectedCategory === 0
      ? "Все"
      : `${PRODUCT_CATEGORIES[selectedCategory]} пиццы`;

  return (
    <Flex marginBottom={px2vw(20)}>
      <Typography fontSize={remCalc(36)} fontWeight={800}>
        {currentCategory}
      </Typography>
    </Flex>
  );
};
