import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCartItem} from "./types.ts";
import {RootState} from "../../store";
import {getCartFromLS} from "../../../utils/getCartFromLS.ts";
import {totalPrice} from "../../../utils";
import {totalQuantity} from "../../../utils/totalQuantity.ts";

const initialState = getCartFromLS();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TCartItem>) {
            const itemIndex = state.cartItem.findIndex(({
                                                            id,
                                                            size,
                                                            type
                                                        }) =>
                id === action.payload.id
                && size === action.payload.size
                && type === action.payload.type);
            if (itemIndex === -1) {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                state.cartItem[itemIndex].quantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
            state.sumPrice = totalPrice(state.cartItem)
            state.totalQnt = totalQuantity(state.cartItem);
        },
        increaseQuantity(state, action: PayloadAction<TCartItem>) {
            const findIndex = state.cartItem.findIndex(({id, size, type}) =>
                id === action.payload.id
                && size === action.payload.size
                && type === action.payload.type);
            if (~findIndex) {
                state.cartItem[findIndex].quantity += 1;
            } else {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
            state.sumPrice = totalPrice(state.cartItem);
            state.totalQnt = totalQuantity(state.cartItem);
        },
        decreaseQuantity(state, action: PayloadAction<Omit<TCartItem, 'title' | 'imageUrl' | 'quantity' | 'price'>>) {
            const findIndex = state.cartItem.findIndex(({id, size, type}) =>
                id === action.payload.id
                && size === action.payload.size
                && type === action.payload.type);

            if (state.cartItem[findIndex].quantity > 1) {
                state.cartItem[findIndex].quantity -= 1;
            } else {
                state.cartItem.splice(findIndex, 1);
            }
            localStorage.removeItem('cartItems');
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
            state.sumPrice = totalPrice(state.cartItem);
            state.totalQnt = totalQuantity(state.cartItem);
        },
        removeItem(state, action: PayloadAction<number>) {
            // state.cartItem = state.cartItem.filter(({id}) => id !== action.payload.id)
            const findItem = state.cartItem.findIndex(({id}) => id === action.payload);

            if (~findItem) {
                state.cartItem.splice(findItem, 1);
            }

            localStorage.removeItem('cartItems');
            state.sumPrice = totalPrice(state.cartItem);
            state.totalQnt = totalQuantity(state.cartItem);
        },
        clearCart(state) {
            state.cartItem = [];
            state.sumPrice = 0;
        }
    }
});

export const {
    addToCart,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;

export const cartSelector = {
    cartItem: (state: RootState) => state.cart.cartItem,
}
export default cartSlice;