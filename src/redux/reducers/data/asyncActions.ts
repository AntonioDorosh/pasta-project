import {createAsyncThunk} from "@reduxjs/toolkit";
import {TPizzaParams, TRootObjectProductPizzas} from "./types.ts";
import {API_URL} from "../../../utils";

export const fetchProductData = createAsyncThunk<TRootObjectProductPizzas[], TPizzaParams>(
    'product/fetchProductData',
    async (params, thunkAPI) => {
        const {searchValue, itemsPerPage, activeCategory, currentPage} = params;
        try {
            const response = await fetch(`${API_URL}?${searchValue !== "" ? "&q=" + searchValue : ""}${itemsPerPage !== 0 ? "&_limit=" + itemsPerPage : ""} ${activeCategory !== 0 ? "&category=" + activeCategory : ""}${currentPage !== 0 ? "&_page=" + currentPage : ""}`);
            return response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);