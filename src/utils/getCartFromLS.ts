import {TCartItem} from "../redux/reducers/cart/types.ts";
import {totalPrice} from "./totalPrice.ts";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cartItems');
    const items = data ? JSON.parse(data) : [];
    const sumPrice = totalPrice(items);

    return {
        cartItem: items as TCartItem[],
        sumPrice,
    };
};

