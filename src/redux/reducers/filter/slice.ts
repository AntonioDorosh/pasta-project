import {Sort, SortPropertyObj, TFilterState} from "./type.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

const initialState: TFilterState = {
    searchValue: '',
    activeCategory: 0,
    sort: {
        name: 'По умолчанию',
        sortProperty: SortPropertyObj.price_asc,
    },
    currentPage: 1,
    itemsPerPage: 5,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload;
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    }
});

export const {
    setSearchValue,
    setSort,
    setCurrentPage,
    setCategoryId,
} = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;
