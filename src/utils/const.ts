
// Sizes for pizza ProductItem
import {TCartItem} from "../redux/reducers/cart/type.ts";

export const pizzaTypes = ['thin', 'traditional'];

// Categories for filter
export const productCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
export const calculateTotalQnt = (cartItem: TCartItem[]) => cartItem.reduce((acc, item) => acc + item.quantity, 0);


// find pizza in productItem
export const findPizzaCount = (cartItem: TCartItem[], id: number | string, activeTypes: number, activeSize: number, sizes: number[]) => {
    const currentPizza = cartItem.find((obj) => obj.id === id && obj.type === pizzaTypes[activeTypes] && obj.size === sizes[activeSize]);
    return currentPizza ? currentPizza.quantity : 0;
};

export const API_URL = 'http://localhost:8000/products?';