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
        addProduct(state, action: PayloadAction<TCartItem>) {
            const cartItems = state.cartItem;
            const {id, size, type} = action.payload;

            const itemIndex = cartItems.findIndex((obj) => obj.id === id && obj.size === size && obj.type === type);
            if (itemIndex === -1) {
                cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                cartItems[itemIndex].quantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            state.sumPrice = totalPrice(cartItems)
            state.totalQnt = totalQuantity(cartItems);
        },
        removeProduct(state, action: PayloadAction<Omit<TCartItem, 'title' | 'imageUrl' | 'quantity' | 'price'>>) {
            const cartItems = state.cartItem;
            const {id, size, type} = action.payload;

            const findIndex = cartItems.findIndex((obj) => obj.id === id && obj.size === size && obj.type === type);

            if (cartItems[findIndex].quantity > 1) {
                cartItems[findIndex].quantity -= 1;
            } else {
                cartItems.splice(findIndex, 1);
            }
            localStorage.removeItem('cartItems');
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            state.sumPrice = totalPrice(cartItems);
            state.totalQnt = totalQuantity(cartItems);
        },
        removeCurrentProduct(state, action: PayloadAction<number>) {
            const cartItems = state.cartItem;
            const findItem = cartItems.findIndex(({id}) => id === action.payload);

            if (~findItem) {
                cartItems.splice(findItem, 1);
            }

            localStorage.removeItem('cartItems');
            state.sumPrice = totalPrice(cartItems);
            state.totalQnt = totalQuantity(cartItems);
        },
        clearCart(state) {
            state.cartItem = [];
            state.sumPrice = 0;
            state.totalQnt = 0;
        }
    }
});

export const {
    addProduct,
    removeProduct,
    removeCurrentProduct,
    clearCart,
} = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;
export default cartSlice;