import {createAsyncThunk} from "@reduxjs/toolkit";
import {TPizzaParams, TRootObjectProductPizzas} from "./types.ts";
import {API_URL} from "../../../utils";

export const fetchProductData = createAsyncThunk<TRootObjectProductPizzas[], TPizzaParams>(
    'product/fetchProductData',
    async (params, thunkAPI) => {
        const {searchValue, itemsPerPage, activeCategory, currentPage} = params;
        const query = [
            searchValue !== "" ? "&q=" + searchValue : "",
            itemsPerPage !== 0 ? "&_limit=" + itemsPerPage : "",
            activeCategory !== 0 ? "&category=" + activeCategory : "",
            currentPage !== 0 ? "&_page=" + currentPage : "",
        ].join('');
        try {
            const response = await fetch(`${API_URL}?${query}`);
            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);