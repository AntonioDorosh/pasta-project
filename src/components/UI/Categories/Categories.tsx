import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {px2vw} from "@/utils";
import {Button} from "@/components/UI/Buttons/Button/Button";
import {COLORS, PRODUCT_CATEGORIES} from "@/constants/constants";

type CategoriesProps = {
  selectedCategory: number;
  setSelectedCategory: (index: number) => void;
};

export const Categories = ({selectedCategory, setSelectedCategory}: CategoriesProps) => {
  return (
    <Flex
      as={'nav'}
      display={"inline-flex"}
      gap={px2vw(10)}
      background={COLORS.white}
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
