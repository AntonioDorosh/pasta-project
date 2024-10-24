import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { PRODUCT_CATEGORIES } from "@/shared/utils";
import { px2vw } from "@/utils";
import { Button } from "@/components/UI/Button/Button";

type CategoriesProps = {
  selectedCategory: number;
  setSelectedCategory: (index: number) => void;
};

export const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <Flex
      display={"inline-flex"}
      gap={px2vw(10)}
      background={"#FAFAFA"}
      borderRadius={"15px"}
      marginBottom={px2vw(66)}
    >
      {PRODUCT_CATEGORIES.map((category, index) => (
        <Button
          key={index}
          $variant={"category"}
          $isActive={selectedCategory === index}
          onClick={() => setSelectedCategory(index)}
        >
          {category}
        </Button>
      ))}
    </Flex>
  );
};
