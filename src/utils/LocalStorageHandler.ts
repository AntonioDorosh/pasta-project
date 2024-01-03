import {TCartItem} from "../redux/reducers/cart/types.ts";

export const addToLS = (arr: TCartItem[], key: string) => {
    localStorage.setItem(key, JSON.stringify(arr));
};

export const removeFromLS = (key: string) => {
    localStorage.removeItem(key);
};