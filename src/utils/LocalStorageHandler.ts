import {TCartItem} from "../redux/reducers/cart/types.ts";

export const addToLS = (arr: TCartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(arr));
};

export const removeFromLS = (key: string) => {
    localStorage.removeItem(key);
};