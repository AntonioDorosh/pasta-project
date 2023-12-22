import {ESortProperty, TFilterState, TSort} from "./types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

const initialState: TFilterState = {
    searchValue: '',
    activeCategory: 0,
    sort: {
        name: 'популярности',
        sortProperty: ESortProperty.PRICE_ASC,
    },
    currentPage: 1,
    itemsPerPage: 5,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
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
    }
});

export const {
    setSearchValue,
    setSort,
    setCurrentPage,
    setCategoryId,
} = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;

export default filterSlice;