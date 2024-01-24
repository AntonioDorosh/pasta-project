import {TCartItem} from "../redux/reducers/cart/type.ts";

export const addToLS = (arr: TCartItem[], key: string) => {
    const nonEmptyItems = arr.filter(item => Object.keys(item).length !== 0);

    if (nonEmptyItems.length !== 0) {
        localStorage.setItem(key, JSON.stringify(nonEmptyItems));
    }
};

export const removeFromLS = (key: string) => {
    localStorage.removeItem(key);
};