import { TIngredients, TOffers } from "@/shared/types/products";

type CalculatePriceWithIngredientProps = {
  offers: TOffers[];
  selectedSize: number;
  selectedIngredients: number[];
  ingredients: TIngredients[];
};

export const calculatePriceWithIngredient = ({
  offers,
  selectedIngredients,
  selectedSize,
  ingredients,
}: CalculatePriceWithIngredientProps) => {
  const basePrice = offers[selectedSize].price;
  const ingredientsPrice = selectedIngredients.reduce((acc, ingredientId) => {
    const ingredient = ingredients.find(
      (ingredient) => ingredient.ingredientId === ingredientId,
    );

    return acc + (ingredient?.price || 0);
  }, 0);

  return basePrice + ingredientsPrice;
};
