import { dataService } from "@/shared/api/data-service";
import { TCartItem } from "@/shared/types/cart";
import { useMutation } from "@tanstack/react-query";
import { TIngredients, TOffers } from "@/shared/types/products";
import { PRODUCT_TYPE, queryClient } from "@/shared/utils";

type UseAddItemToCartProps = {
  cart: TCartItem[] | undefined;
  id: number;
  title: string;
  imageSrc: string;
  selectedOffer: TOffers;
  selectedType: number;
  selectedIngredient: number[];
  ingredients: TIngredients[];
};

const validIngredients = (ingredients: TIngredients[]): TIngredients[] =>
  ingredients.filter(Boolean);

const getSelectedIngredients = (
  ingredientIds: number[],
  allIngredients: TIngredients[],
): TIngredients[] =>
  ingredientIds
    .map((id) =>
      allIngredients.find((ingredient) => ingredient.ingredientId === id),
    )
    .filter(Boolean) as TIngredients[];

const findExistingProduct = (
  cart: TCartItem[] | undefined,
  id: number,
  selectedOffer: TOffers,
  selectedType: number,
  selectedIngredients: TIngredients[],
): TCartItem | undefined =>
  cart?.find(
    (item) =>
      item.offers.productId === id &&
      item.offers.size === selectedOffer.size &&
      item.type === PRODUCT_TYPE[selectedType] &&
      JSON.stringify(item.ingredients) === JSON.stringify(selectedIngredients),
  );

export const useAddItemToCart = ({
  cart,
  ingredients,
  selectedIngredient,
  selectedType,
  selectedOffer,
  id,
  imageSrc,
  title,
}: UseAddItemToCartProps) => {
  const selectedIngredients = getSelectedIngredients(
    selectedIngredient,
    validIngredients(ingredients),
  );

  const addItem = () => {
    const existingProduct = findExistingProduct(
      cart,
      id,
      selectedOffer,
      selectedType,
      selectedIngredients,
    );

    if (existingProduct) {
      const { id: productId = 0, quantity } = existingProduct;
      const newQuantity = quantity + 1;

      return dataService.updateQuantity(productId, newQuantity);
    }

    return dataService.addToCart({
      title,
      imageSrc,
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

  const { mutate: addItemToCart } = useMutation({
    mutationFn: addItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return addItemToCart;
};
