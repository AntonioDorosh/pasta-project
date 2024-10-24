import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { TIngredients } from "@/shared/types/products";
import { formatCurrency, px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { Button } from "@/components/UI/Button/Button";

type IngredientsProps = {
  ingredients: TIngredients[];
  selectedIngredient: number[];
  setSelectedIngredient: React.Dispatch<React.SetStateAction<number[]>>;
};

export const Ingredients = ({
  ingredients,
  selectedIngredient,
  setSelectedIngredient,
}: IngredientsProps) => {
  const onClickSelectedIngredientHandler = (ingredientId: number) => {
    setSelectedIngredient((prevState) =>
      prevState.includes(ingredientId)
        ? prevState.filter((id) => id !== ingredientId)
        : [...prevState, ingredientId],
    );
  };

  return (
    <Flex gap={px2vw(10)} maxHeight={"193px"} marginBottom={px2vw(30)}>
      {ingredients.map((ingredient, index) => (
        <Button
          key={index}
          $variant={"ingredients"}
          $isActive={selectedIngredient.includes(ingredient.ingredientId)}
          onClick={() =>
            onClickSelectedIngredientHandler(ingredient.ingredientId)
          }
        >
          <img src={ingredient.imageSrc} alt={ingredient.name} />
          <Typography
            fontSize={remCalc(12)}
            textAlign={"center"}
            marginBottom={px2vw(10)}
          >
            {ingredient.name}
          </Typography>
          <Typography fontWeight={700} marginTop={"auto"}>
            {formatCurrency(ingredient.price)}
          </Typography>
        </Button>
      ))}
    </Flex>
  );
};
