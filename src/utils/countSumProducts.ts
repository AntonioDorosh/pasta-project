import {TCartItem} from "../redux/reducers/cart/types.ts";

export const countPrice = (cartItem: TCartItem[]) => cartItem.reduce((acc, product) => acc + (product.price * product.quantity), 0);

export const countSumQuantity = (cartItem: TCartItem[]) => cartItem.reduce((acc, product) => acc + product.quantity, 0);