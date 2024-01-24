import {EStatus, TProductState} from "./type.ts";
import {createReducer} from "@reduxjs/toolkit";
import {fetchProductData} from "./asyncActions.ts";
import {RootState} from "../../store";

const initialState = {
    product: [],
    status: EStatus.LOADING,
    error: '',
} as TProductState;

const productReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchProductData.pending, (state) => {
            state.status = EStatus.LOADING;
        })
        .addCase(fetchProductData.fulfilled, (state, action) => {
            state.status = EStatus.SUCCESS;
            state.product = action.payload;
        })
        .addCase(fetchProductData.rejected, (state, action) => {
            state.status = EStatus.ERROR;
            state.error = action.error.message as string;
        })
})


export const productSelector = (state: RootState) => state.product;

export const product = productReducer;