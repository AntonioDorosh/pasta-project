import { TIngredients, TOffers } from "@/shared/types/products";

type CalculatePriceWithIngredientProps = {
  offers: TOffers[];
  selectedSize: number;
  selectedIngredients: number[];
  ingredients: TIngredients[];
};

/**
 *
 * @param offers - список предложений
 * @param selectedIngredients - выбранные ингредиенты
 * @param selectedSize - выбранный размер продукта
 * @param ingredients - список ингредиентов
 * @return - цена с учетом выбранных ингредиентов
 */

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
