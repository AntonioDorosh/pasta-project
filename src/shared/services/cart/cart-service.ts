import {TIngredients, TOffers} from "@/shared/types/products";
import {CartItemDto} from "@/shared/types/cart";

type CalculatePriceWithIngredientProps = {
  offers: TOffers[];
  selectedSize: number;
  selectedIngredients: number[];
  ingredients: TIngredients[];
};


class CartService {
  private calculatePriceItem(item: CartItemDto): number {
    const {offers, price, quantity, ingredients} = item;

    const basePrice = offers.price || price;
    const qnt = quantity || 0;
    const ingredientsPrice = ingredients.reduce((acc, {price}) => acc + (price || 0), 0);

    return (basePrice + ingredientsPrice) * qnt
  }

  calculateTotalPrice(cart: CartItemDto[] | undefined) {
    return (
      cart?.reduce((acc, currentValue) => {
        return acc + this.calculatePriceItem(currentValue)
      }, 0) || 0
    )
  }

  calculateCurrentPrice(cart: CartItemDto[] | undefined, id: number) {
    const findCurrentItem = cart?.find((item) => item.id === id);

    return findCurrentItem ? this.calculatePriceItem(findCurrentItem) : 0;
  }

  calculatePriceWithIngredients(props: CalculatePriceWithIngredientProps) {
    const {offers, selectedSize, selectedIngredients, ingredients} = props;
    const basePrice = offers[selectedSize].price;
    const ingredientsPrice = selectedIngredients.reduce((acc, ingredientId) => {
      const ingredient = ingredients.find((i) => i.ingredientId === ingredientId)

      return acc + (ingredient?.price || 0)
    }, 0);

    return basePrice + ingredientsPrice
  }

  private calculateAdditionalCost(cart: CartItemDto[] | undefined, multiplier: number): number {
    return cart?.reduce((acc, {offers, price, quantity}) => {
      const itemPrice = offers.discount ? price * (1 - offers.discount / 100) : price;

      return acc + itemPrice * quantity * multiplier
    }, 0) || 0
  }

  calculateWithDelivery(cart: CartItemDto[] | undefined): number {
    return this.calculateAdditionalCost(cart, 0.05);
  }

  calculateWithTax(cart: CartItemDto[] | undefined) {
    return this.calculateAdditionalCost(cart, 0.013)
  }
}

export const cartService = new CartService();
