import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {TIngredients} from "@/shared/types/products";
import {formatCurrency, px2vw, remCalc} from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {Button} from "@/components/UI/Buttons/Button/Button";
import checked from "@/assets/images/check-icon.svg";

type IngredientsProps = {
  ingredients: TIngredients[];
  selectedIngredient: number[];
  setSelectedIngredient: React.Dispatch<React.SetStateAction<number[]>>;
};

export const Ingredients = (props: IngredientsProps) => {
  const {selectedIngredient, setSelectedIngredient, ingredients} = props;

  const onClickSelectedIngredientHandler = (ingredientId: number) => {
    setSelectedIngredient((prevIngredient) => prevIngredient.includes(ingredientId) ? prevIngredient.filter((id) => id !== ingredientId) : [...prevIngredient, ingredientId])
  }

  return (
    <Flex gap={px2vw(10)} minHeight={"193px"} marginBottom={px2vw(30)}>
      {ingredients.map((ingredient, index) => {
        const {ingredientId, imageSrc, name, price} = ingredient;
        const isActive = selectedIngredient.includes(ingredientId)

        return (
          <Button
            style={{
              position: "relative",
            }}
            key={index}
            $variant={"ingredients"}
            $isActive={isActive}
            onClick={() =>
              onClickSelectedIngredientHandler(ingredientId)
            }
          >
            <img src={imageSrc} alt={name}/>
            <Typography
              fontSize={remCalc(12)}
              textAlign={"center"}
              marginBottom={px2vw(10)}
            >
              {name}
            </Typography>
            <Typography fontWeight={700} marginTop={"auto"}>
              {formatCurrency(price)}
            </Typography>
            {isActive && <Flex
							position={"absolute"}
							top={"5px"}
							right={"5px"}
							width={"20px"}
							height={"20px"}
							backgroundImage={`url(${checked})`}
							backgroundSize={"contain"}
							backgroundRepeat={"no-repeat"}
						/>
            }
          </Button>
        )
      })}
    </Flex>
  );
};
