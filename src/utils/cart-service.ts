import {TIngredients, TOffers} from "@/shared/types/products";
import {CartItemDto} from "@/shared/types/cart";

type CalculatePriceWithIngredientProps = {
  offers: TOffers[];
  selectedSize: number;
  selectedIngredients: number[];
  ingredients: TIngredients[];
};

let initialValue = 0;

class CartService {
  private calculatePriceItem(item: CartItemDto): number {
    const {offers, price, quantity} = item;

    const offerPrice = offers.price || price;
    const qnt = quantity || 0;
    const ingredientsPrice = item.ingredients.reduce((acc, ingredientValue) => acc + (ingredientValue.price || 0), initialValue);

    return (offerPrice + ingredientsPrice) * qnt
  }

  calculateTotalPrice(cart: CartItemDto[] | undefined) {
    return (
      cart?.reduce((acc, currentValue) => {
        return acc + this.calculatePriceItem(currentValue)
      }, initialValue) || 0
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
    }, initialValue);

    return basePrice + ingredientsPrice
  }

  calculateTotalPriceWithDiscount(cart: CartItemDto[] | undefined) {

    return cart?.reduce((acc, currentValue) => {
      const {offers, price, quantity} = currentValue;

      const itemPrice = offers.discount
        ? price - price * offers.discount / 100
        : price;

      return acc + itemPrice * quantity * 0.05
    }, initialValue)
  }
}

export const cartService = new CartService();
