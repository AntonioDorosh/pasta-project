import {
  addToLS,
  getCartFromLS,
  removeFromLS,
  totalPrice,
} from "../../../utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem, TCartRemove, TCartState } from "./type.ts";

const { cartItem, sumPrice } = getCartFromLS();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem,
    sumPrice,
  } as TCartState,
  reducers: {
    addProduct: (state, action: PayloadAction<TCartItem>) => {
      const cartItem = state.cartItem;
      const { id, type, size } = action.payload;
      const existingProduct = cartItem.find(
        (product) =>
          product.id === id && product.type === type && product.size === size,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartItem.push({
          ...action.payload,
          quantity: 1,
        });
      }

      addToLS(cartItem, "cartItem");
      state.sumPrice = totalPrice(cartItem);
    },
    removeProduct: (state, action: PayloadAction<TCartRemove>) => {
      const cartItem = state.cartItem;
      const { id, type, size } = action.payload;
      const findIndexOfProduct = cartItem.findIndex(
        (product) =>
          product.id === id && product.size === size && product.type === type,
      );

      if (cartItem[findIndexOfProduct].quantity > 1) {
        cartItem[findIndexOfProduct].quantity -= 1;
      } else {
        cartItem.splice(findIndexOfProduct, 1);
      }

      removeFromLS("cartItem");
      addToLS(cartItem, "cartItem");
      state.sumPrice = cartItem.reduce(
        (sum, obj) => sum + obj.price * obj.quantity,
        0,
      );
    },
    removeCurrentProduct: (state, action: PayloadAction<number | string>) => {
      const cartItem = state.cartItem;
      const findIndexOfProduct = cartItem.findIndex(
        (obj) => obj.id === action.payload,
      );

      if (~findIndexOfProduct) {
        cartItem.splice(findIndexOfProduct, 1);
      }

      removeFromLS("cartItems");
      state.sumPrice = totalPrice(cartItem);
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.sumPrice = 0;
    },
  },
  selectors: {
    selectCartItems: (state) => state.cartItem,
  },
});

export const { addProduct, removeProduct, removeCurrentProduct, clearCart } =
  cartSlice.actions;

export const { selectCartItems } = cartSlice.selectors;
