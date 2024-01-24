import {addToLS, getCartFromLS, removeFromLS, totalPrice} from "../../../utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCartItem, TCartRemove, TCartState} from "./type.ts";
import {RootState} from "../../store";

const {cartItem, sumPrice} = getCartFromLS();

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem,
        sumPrice
    } as TCartState,
    reducers: {
        addProduct: (state, action: PayloadAction<TCartItem>) => {
            const cartItem = state.cartItem;
            const {id, size, type} = action.payload;
            const existingProduct = cartItem.find((obj) => obj.id === id && obj.type === type && obj.size === size);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cartItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            addToLS(cartItem, 'cartItem')
            state.sumPrice = totalPrice(cartItem);
        },
        removeProduct: (state, action: PayloadAction<TCartRemove>) => {
            const cartItem = state.cartItem;
            const {id, type, size} = action.payload;
            const findProduct = cartItem.findIndex((obj) => obj.id === id && obj.type === type && obj.size === size);

            if (cartItem[findProduct].quantity > 1) {
                cartItem[findProduct].quantity -= 1;
            } else {
                cartItem.splice(findProduct, 1);
            }

            removeFromLS('cartItem')
            addToLS(cartItem, 'cartItem')
            state.sumPrice = cartItem.reduce((sum, obj) => sum + obj.price * obj.quantity, 0);
        },
        removeCurrentProduct: (state, action: PayloadAction<number | string>) => {
            const cartItem = state.cartItem;
            const findProduct = cartItem.findIndex((obj) => obj.id === action.payload);

            if (~findProduct) {
                cartItem.splice(findProduct, 1);
            }

            removeFromLS('cartItems')
            state.sumPrice = totalPrice(cartItem);
        },
        clearCart: (state) => {
            state.cartItem = [];
            state.sumPrice = 0;
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
