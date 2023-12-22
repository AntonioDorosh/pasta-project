import {TCartItem} from "../redux/reducers/cart/types.ts";

export const totalQuantity = (cartItem: TCartItem[]) => cartItem.reduce((acc, product) => acc + product.quantity, 0);