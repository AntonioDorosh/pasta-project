import {dataService} from "@/shared/api/data-service";
import {CartItemDto} from "@/shared/types/cart";
import {useMutation} from "@tanstack/react-query";
import {TIngredients, TOffers} from "@/shared/types/products";
import {PRODUCT_TYPE} from "@/constants/constants";
import {queryClient} from "@/index";

type UseAddItemToCartProps = {
  cartItems: CartItemDto[] | undefined;
  id: number;
  title: string;
  imageSrc: string;
  selectedOffer: TOffers;
  selectedType: number;
  selectedIngredient: number[];
  ingredients: TIngredients[];
};

/**
 *
 * @param ingredientIds - ищет ингредиенты по id
 * @param allIngredients - ищет выбранные пользователем ингредиенты на основе их идентификаторов.
 * @return - возвращает выбранные ингредиенты
 */

const getSelectedIngredients = (
  ingredientIds: number[],
  allIngredients: TIngredients[],
): TIngredients[] =>
  ingredientIds
    .map((id) =>
      allIngredients.find((ingredient) => ingredient.ingredientId === id),
    )
    .filter(Boolean) as TIngredients[];

/**
 *
 * @param cart - массив продуктов в корзине
 * @param selectedOffer - предложение продукта по размеру
 * @param selectedType - тип продукта
 * @param selectedIngredients - Ингредиенты (сравниваются через JSON.stringify для точного совпадения массива).
 * @return - находит существующий продукт в корзине
 */

const findExistingProductInCart = (
  cart: CartItemDto[] | undefined,
  selectedOffer: TOffers,
  selectedType: number,
  selectedIngredients: TIngredients[],
): CartItemDto | undefined =>
  cart?.find(
    ({offers, type, ingredients, id}) =>
      offers.productId === selectedOffer.productId &&
      offers.size === selectedOffer.size &&
      type === PRODUCT_TYPE[selectedType] &&
      JSON.stringify(ingredients) === JSON.stringify(selectedIngredients),
  );

const addToCart = (params: UseAddItemToCartProps) => {
  const {
    cartItems,
    ingredients,
    selectedIngredient,
    selectedType,
    selectedOffer,
    imageSrc,
    title,
  } = params;

  const selectedIngredients = getSelectedIngredients(selectedIngredient, ingredients);

  const existingProduct = findExistingProductInCart(
    cartItems,
    selectedOffer,
    selectedType,
    selectedIngredients,
  );

  if (existingProduct) {
    const {id: productId = 0, quantity} = existingProduct;
    const newQuantity = quantity + 1;

    return dataService.updateQuantity(productId, newQuantity);
  }

  return dataService.addToCart({
    title,
    imageSrc,
    price: selectedOffer.price,
    offers: {
      productId: selectedOffer.productId,
      size: selectedOffer.size,
      price: selectedOffer.price,
      weight: selectedOffer.weight,
      numericSize: selectedOffer.numericSize,
    },
    type: PRODUCT_TYPE[selectedType],
    ingredients: selectedIngredients,
    quantity: 1,
  });
};

export const useAddToCart = () => {
  const {mutate: addToCartMutation} = useMutation({
    mutationFn: addToCart,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["cart"]}),
  });

  return addToCartMutation;
};
