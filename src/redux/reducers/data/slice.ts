import {
    EStatus,
    TPizzaParams,
    TProductState,
    TRootObjectProductPizzas
} from "./types.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "../../../utils";

const initialState: TProductState = {
    product: [],
    status: EStatus.LOADING,
    error: '',
};

export const fetchProductData = createAsyncThunk<TRootObjectProductPizzas[], TPizzaParams>(
    'product/fetchProductData',
    async(params) => {
        const {searchValue} = params;
        try {
          const response = await fetch(`${API_URL}?${searchValue !== "" ? "&q=" + searchValue : ""}`);
          return response.json()
        } catch (e) {
            console.log(e);
            return [];
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.product = action.payload;
            state.status = EStatus.SUCCESS;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.status = EStatus.LOADING;
        })
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.product = action.payload;
            state.status = EStatus.SUCCESS;
        })
        builder.addCase(fetchProductData.rejected, (state, action) => {
            state.status = EStatus.ERROR;
            state.error = action.error.message || '';
        })
    }
});

export const {setItems} = productSlice.actions;

export const product = productSlice.reducer