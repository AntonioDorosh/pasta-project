import {TCartItem} from "../redux/reducers/cart/types.ts";
import {totalPrice} from "./totalPrice.ts";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cartItem');

    if (!data) {
        return {
            cartItem: [] as TCartItem[],
            sumPrice: 0,
        };
    }
    const items = data ? JSON.parse(data) : [];
    const sumPrice = totalPrice(items);

    return {
        cartItem: items as TCartItem[],
        sumPrice,
    };
};

