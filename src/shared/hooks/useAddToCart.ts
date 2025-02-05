import {dataService} from "@/shared/api/data-service";
import {CartItemDto} from "@/shared/types/cart";
import {useMutation} from "@tanstack/react-query";
import {TIngredients, TOffers} from "@/shared/types/products";
import {PRODUCT_TYPE, queryClient} from "@/shared/utils";

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
 * @param ingredients - массив ингредиентов
 * @return -фильтрует массив ингредиентов, исключая любые значения, которые являются undefined или null.
 */

const filterValidIngredients = (ingredients: TIngredients[]): TIngredients[] =>
  ingredients.filter(Boolean);

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
 * @param id - идентификатор продукта
 * @param selectedOffer - предложение продукта по размеру
 * @param selectedType - тип продукта
 * @param selectedIngredients - Ингредиенты (сравниваются через JSON.stringify для точного совпадения массива).
 * @return - находит существующий продукт в корзине
 */

const findExistingProductInCart = (
  cart: CartItemDto[] | undefined,
  id: number,
  selectedOffer: TOffers,
  selectedType: number,
  selectedIngredients: TIngredients[],
): CartItemDto | undefined =>
  cart?.find(
    ({offers, type, ingredients}) =>
      offers.productId === id &&
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
    id,
    imageSrc,
    title,
  } = params;

  const validIngredientsList = filterValidIngredients(ingredients);
  const selectedIngredients = getSelectedIngredients(selectedIngredient, validIngredientsList);

  const existingProduct = findExistingProductInCart(
    cartItems,
    id,
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
      productId: id,
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
