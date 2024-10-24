import {CartItemDto} from "@/shared/types/cart";

/**
 * @param cart - массив продуктов в корзине
 * @returns общую стоимость корзины
 */

export const calculateTotalPrice = (cart: CartItemDto[] | undefined) => {
  return (
    cart?.reduce((acc, currentValue) => {
      const offerPrice = currentValue.offers.price;
      const quantity = currentValue.quantity || 0;
      const ingredientsPrice = currentValue.ingredients.reduce(
        (acc, ingredientValue) => acc + (ingredientValue.price || 0),
        0,
      );

      const totalAmount = (offerPrice + ingredientsPrice) * quantity;

      return totalAmount + acc;
    }, 0) || 0
  );
};
