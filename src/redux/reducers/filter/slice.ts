import { sortProperty, TFilterState, TSort } from "./type.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
    },
});

export const { setSearchValue, setSort, setCurrentPage, setCategoryId } =
    filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;
