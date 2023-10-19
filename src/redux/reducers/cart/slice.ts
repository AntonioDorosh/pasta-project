import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCartItem, TCartStateSlice} from "./types.ts";

const initialState: TCartStateSlice = {
    cartItem: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const itemIndex = state.cartItem.findIndex((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            if (itemIndex === -1) {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                state.cartItem[itemIndex].quantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem));
            state.cartTotalAmount = state.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.cartTotalQuantity = state.cartItem.reduce((acc, item) => acc + item.quantity, 0);
        },
        increaseQuantity: (state, action: PayloadAction<TCartItem>) => {
            const findIndex = state.cartItem.findIndex((obj) =>
                obj.id === action.payload.id
                && obj.size === action.payload.size
                && obj.type === action.payload.type);
            if (findIndex !== -1) {
                state.cartItem[findIndex].quantity += 1;
            } else {
                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            state.cartTotalAmount = state.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.cartTotalQuantity = state.cartItem.reduce((acc, item) => acc + item.quantity, 0);
        },
        decreaseQuantity: (state, action: PayloadAction<TCartItem>) => {
            const findIndex = state.cartItem.findIndex((obj) =>
                obj.id === action.payload.id
                && obj.size === action.payload.size
                && obj.type === action.payload.type);

            if (state.cartItem[findIndex].quantity > 1) {
                state.cartItem[findIndex].quantity -= 1;
            } else {
                state.cartItem.splice(findIndex, 1);
            }
            state.cartTotalAmount = state.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.cartTotalQuantity = state.cartItem.reduce((acc, item) => acc + item.quantity, 0);
            localStorage.removeItem('cartItems');
        },
        removeItem: (state, action: PayloadAction<TCartItem>) => {
            state.cartItem = state.cartItem.filter((obj) =>
                obj.id !== action.payload.id
                && obj.size !== action.payload.size
                && obj.type !== action.payload.type);
            state.cartTotalAmount = state.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.cartTotalQuantity = state.cartItem.reduce((acc, item) => acc + item.quantity, 0);
        },
        clearCart: (state) => {
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
export default cartSlice.reducer;