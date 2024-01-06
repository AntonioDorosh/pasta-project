import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../reducers/cart/slice.ts";
import filterSlice from "../reducers/filter/slice.ts";
import {product} from "../reducers/data/slice.ts";
import modalSlice from "../reducers/modal/slice.ts";

export const store = configureStore({
    reducer: {
        product,
        modal: modalSlice,
        cart: cartSlice.reducer,
        filter: filterSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;