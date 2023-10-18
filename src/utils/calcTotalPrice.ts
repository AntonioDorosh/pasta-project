import {TCartItem} from "../redux/reducers/cart/types.ts";

export const calcTotalPrice = (items: TCartItem[]) => {
    return items.reduce((sum, obj) => obj.price + sum, 0)
};