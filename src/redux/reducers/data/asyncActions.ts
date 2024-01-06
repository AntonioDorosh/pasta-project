import {createAsyncThunk} from "@reduxjs/toolkit";
import {TPizzaParams, TRootObjectProductPizzas} from "./types.ts";
import {API_URL} from "../../../utils";

const createQuery = (params: TPizzaParams) => {
    const {searchValue, currentPage, itemsPerPage, activeCategory} = params;

    return [
        searchValue ? `q=${searchValue}` : '',
        activeCategory ? `category=${activeCategory}` : '',
        `_page=${currentPage}`,
        `_limit=${itemsPerPage}`
    ].join('&');
};

export const fetchProductData = createAsyncThunk<TRootObjectProductPizzas[], TPizzaParams>(
    'product/fetchProductData',
    async (params, thunkAPI) => {
        const query = createQuery(params);
        try {
            const response = await fetch(`${API_URL}?${query}`);
            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);