import {createAsyncThunk} from "@reduxjs/toolkit";
import {TPizzaParams, TRootObjectProductPizzas} from "./type.ts";

const createQuery = (params: TPizzaParams) => {
    const {
        search,
        currentPage,
        itemsPerPage,
        category,
        sortBy
    } = params;

    return [
        search ? `q=${search}` : '',
        category ? `category=${category}` : '',
        `_page=${currentPage}`,
        `_limit=${itemsPerPage}`,
        `&_sort=${sortBy}`
    ].join('&');
};

export const fetchProductData = createAsyncThunk<TRootObjectProductPizzas[], TPizzaParams>(
    'product/fetchProductData',
    async (params, thunkAPI) => {
        const query = createQuery(params);
        const API_URL = 'http://localhost:8000/products';
        try {
            return await fetch(`${API_URL}?${query}`).then((res) => res.json());
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);