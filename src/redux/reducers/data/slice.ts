import {
    EStatus,
    TRootObjectProductState
} from "./types.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "../../../utils";

const initialState: TRootObjectProductState = {
    product: [],
    status: EStatus.LOADING,
    error: null
};

export const fetchProductData = createAsyncThunk(
    'product/fetchProductData',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(API_URL);

            return await response.json()
        } catch (error) {
            return thunkAPI.rejectWithValue('Oops, something went wrong...')
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.status = EStatus.LOADING
            state.product = [];
        })
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.status = EStatus.SUCCESS
            state.product = action.payload
        })
        builder.addCase(fetchProductData.rejected, (state) => {
            state.status = EStatus.ERROR
            state.product = [];
        })
    }
})


export const product = productSlice.reducer;