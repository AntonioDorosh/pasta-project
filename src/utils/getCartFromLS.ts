import { TCartItem } from "../redux/reducers/cart/type.ts";
import { totalPrice } from "./totalPrice.ts";

export const getCartFromLS = () => {
    const data = localStorage.getItem("cartItem");
    const items = data ? JSON.parse(data) : [];
    const sumPrice = totalPrice(items);

    return {
        cartItem: items as TCartItem[],
        sumPrice,
    };
};
