import {TCartItem} from "../redux/reducers/cart/types.ts";
import {totalPrice} from "./totalPrice.ts";
import {totalQuantity} from "./totalQuantity.ts";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cartItems');
    const items = data ? JSON.parse(data) : [];
    const sumPrice = totalPrice(items);
    const totalQnt = totalQuantity(items);

    return {
        cartItem: items as TCartItem[],
        sumPrice,
        totalQnt
    };
};

