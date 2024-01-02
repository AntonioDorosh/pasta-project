import {addToLS, getCartFromLS, removeFromLS, totalPrice} from "../../../utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCartItem, TCartRemove, TCartState} from "./types.ts";
import {RootState} from "../../store";

const {cartItem, sumPrice} = getCartFromLS();

const initialState: TCartState = {
    cartItem,
    sumPrice
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<TCartItem>) => {
            const cartItem = state.cartItem;
            const {id, size, type} = action.payload;

            const index = cartItem.findIndex((obj) => obj.id === id && obj.size === size && obj.type === type);

            if (index === -1) {
                cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                cartItem[index].quantity += 1;
            }

            addToLS(cartItem)
            state.sumPrice = totalPrice(cartItem);
        },
        removeProduct: (state, action: PayloadAction<TCartRemove>) => {
            const cartItem = state.cartItem;
            const {id, type, size} = action.payload;
            const findIndex = cartItem.findIndex((obj) => obj.id === id && obj.type === type && obj.size === size);

            if (cartItem[findIndex].quantity > 1) {
                cartItem[findIndex].quantity -= 1;
            } else {
                cartItem.splice(findIndex, 1);
            }

            removeFromLS('cartItem')
            addToLS(cartItem)
            state.sumPrice = cartItem.reduce((sum, obj) => sum + obj.price * obj.quantity, 0);
        },
        removeCurrentProduct: (state, action: PayloadAction<number>) => {
            const cartItem = state.cartItem;
            const findProduct = cartItem.findIndex((obj) => obj.id === action.payload);

            if (~findProduct) {
                cartItem.splice(findProduct, 1);
            }

            removeFromLS('cartItem')
            state.sumPrice = totalPrice(cartItem);
        },
        clearCart: (state) => {
            state.cartItem = [];
            state.sumPrice = 0;
            addToLS(state.cartItem)
        }
    }
})

export const {
    addProduct,
    removeProduct,
    removeCurrentProduct,
    clearCart
} = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

export default cartSlice;