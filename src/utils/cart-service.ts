import { CartItemDto } from "@/shared/types/cart";
import { TIngredients, TOffers } from "@/shared/types/products";

type CalculatePriceWithIngredientProps = {
  offers: TOffers[];
  selectedSize: number;
  selectedIngredients: number[];
  ingredients: TIngredients[];
};

class CartService {
  calculateTotalPrice(cart: CartItemDto[] | undefined) {
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
  }

  calculatePriceWithIngredients({
    offers,
    selectedIngredients,
    selectedSize,
    ingredients,
  }: CalculatePriceWithIngredientProps) {
    const basePrice = offers[selectedSize].price;
    const ingredientsPrice = selectedIngredients.reduce((acc, ingredientId) => {
      const ingredient = ingredients.find(
        (ingredient) => ingredient.ingredientId === ingredientId,
      );

      return acc + (ingredient?.price || 0);
    }, 0);

    return basePrice + ingredientsPrice;
  }

  totalPriceWithTaxAndDelivery = (cart: CartItemDto[] | undefined): number => {
    const taxRate = 0.05;
    const deliveryRate = 0.1;
    const totalPrice = cartService.calculateTotalPrice(cart);

    return totalPrice + totalPrice * taxRate + totalPrice * deliveryRate;
  };
}

export const cartService = new CartService();
