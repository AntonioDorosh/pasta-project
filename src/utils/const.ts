// Sizes for pizza ProductItem
import { TCartItem } from "../redux/reducers/cart/type.ts";
import { TRootObjectProductPizzas } from "../redux/reducers/data/type.ts";

export const pizzaTypes = ["thin", "traditional"];

// Categories for filter
export const productCategories = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
  "Closed",
];
export const calculateTotalQnt = (cartItem: TCartItem[]) =>
  cartItem.reduce((acc, item) => acc + item.quantity, 0);

// find pizza in productItem
export const findPizzaCount = (
  cartItem: TCartItem[],
  id: number | string,
  activeTypes: number,
  activeSize: number,
  sizes: number[],
) => {
  const currentPizza = cartItem.find(
    (obj) =>
      obj.id === id &&
      obj.type === pizzaTypes[activeTypes] &&
      obj.size === sizes[activeSize],
  );
  return currentPizza ? currentPizza.quantity : 0;
};

// product with new ID

const createNewId = (productArray: TRootObjectProductPizzas[]) => {
  return productArray.map((product, index) => {
    return {
      ...product,
      id: index + 1,
    };
  });
};

export const filteredPizzas = (ProductArray: TRootObjectProductPizzas[]) => {
  const arrWithId = createNewId(ProductArray);

  return arrWithId.filter((product) => {
    const getProductValues = Object.values(product);

    return getProductValues.some((value) => value !== null);
  });
};
