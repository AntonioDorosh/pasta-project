import React from "react";
import {px2vw, remCalc} from "@/utils";
import {PRODUCT_CATEGORIES} from "@/shared/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {ProductDto} from "@/shared/types/products";

export const CurrentCategory = ({selectedCategory, products}: {
  products: ProductDto[] | undefined;
  selectedCategory: number;
}) => {
  const currentCategory =
    selectedCategory === 0
      ? "Все"
      : `${PRODUCT_CATEGORIES[selectedCategory]} пиццы`;

  const filteredProducts = products?.filter(({category}) => category === selectedCategory);

  return (
    <Flex marginBottom={px2vw(20)}>
      <Typography fontSize={remCalc(36)} fontWeight={800}>
        {currentCategory}
      </Typography>
      {!filteredProducts?.length && selectedCategory !== 0 && (
        <Typography fontSize={remCalc(18)} fontWeight={600} color={'gray'}>
          Товары отсутствуют в этой категории
        </Typography>
      )}
    </Flex>
  );
};
