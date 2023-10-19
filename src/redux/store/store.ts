import {configureStore} from "@reduxjs/toolkit";
import {product} from "../reducers/data/slice";
import cart from "../reducers/cart/slice";
export const store = configureStore({
    reducer: {
        product,
        cart,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;