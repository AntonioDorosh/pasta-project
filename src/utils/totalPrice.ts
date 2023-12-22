import {TCartItem} from "../redux/reducers/cart/types.ts";

export const totalPrice = (cartItem: TCartItem[]) => cartItem.reduce((acc, product) => acc + product.price * product.quantity, 0);

