import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCartItem, TCartStateSlice} from "./types.ts";
import {countPrice, countSumQuantity} from "../../../utils";
import {RootState} from "../../store";

const initialState: TCartStateSlice = {
    cartItem: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0
};

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
            state.cartTotalAmount = countPrice(state.cartItem);
            state.cartTotalQuantity = countSumQuantity(state.cartItem);
        },
        increaseQuantity(state, action: PayloadAction<TCartItem>) {
            const findIndex = state.cartItem.findIndex(({id, size, type}) =>
                id === action.payload.id
                && size === action.payload.size
                && type === action.payload.type);
            if (findIndex !== -1) {
                state.cartItem[findIndex].quantity += 1;
            } else {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            state.cartTotalAmount = countPrice(state.cartItem);
            state.cartTotalQuantity = countSumQuantity(state.cartItem);
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
            state.cartTotalAmount = countPrice(state.cartItem);
            state.cartTotalQuantity = countSumQuantity(state.cartItem);
            localStorage.removeItem('cartItems');
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
        },
        removeItem(state, action: PayloadAction<number>) {
            // state.cartItem = state.cartItem.filter(({id}) => id !== action.payload.id)
            const findItem = state.cartItem.findIndex(({id}) => id === action.payload);

            if (~findItem) {
                state.cartItem.splice(findItem, 1);
            }

            localStorage.removeItem('cartItems');
            state.cartTotalAmount = countPrice(state.cartItem);
            state.cartTotalQuantity = countSumQuantity(state.cartItem);
        },
        clearCart(state) {
            state.cartItem = [];
            state.cartTotalAmount = 0;
            state.cartTotalQuantity = 0;
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
    cartTotalAmount: (state: RootState) => state.cart.cartTotalAmount,
    cartTotalQuantity: (state: RootState) => state.cart.cartTotalQuantity
}
export default cartSlice;