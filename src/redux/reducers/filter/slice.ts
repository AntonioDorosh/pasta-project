import { sortProperty, TFilterState, TSetActive, TSort } from "./type.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialActiveState = Array.from({ length: 5 }, (_, i) => ({
    [i + 1]: 0,
})).reduce((a, b) => ({ ...a, ...b }), {});

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        searchValue: "",
        activeCategory: 0,
        sort: {
            name: "По умолчанию",
            sortProperty: sortProperty.PRICE_ASC,
        },
        currentPage: 1,
        itemsPerPage: 5,
        activeSize: initialActiveState,
        activeTypes: initialActiveState,
    } as TFilterState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload;
        },
        setSort: (state, action: PayloadAction<TSort>) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setActive: (state, action: PayloadAction<TSetActive>) => {
            state[action.payload.key][action.payload.id] = action.payload.value;
        },
    },
});

export const {
    setSearchValue,
    setActive,
    setSort,
    setCurrentPage,
    setCategoryId,
} = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;
