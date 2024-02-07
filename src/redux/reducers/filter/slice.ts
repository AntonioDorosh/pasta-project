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
    activeSize: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    activeTypes: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
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
    setActiveSize: (
      state,
      action: PayloadAction<{
        id: string | number;
        size: number;
      }>,
    ) => {
      state.activeSize[action.payload.id] = action.payload.size;
    },
    setActiveTypes: (
      state,
      action: PayloadAction<{
        id: string | number;
        type: number;
      }>,
    ) => {
      state.activeTypes[action.payload.id] = action.payload.type;
    },
  },
});

export const {
  setSearchValue,
  setActiveTypes,
  setSort,
  setCurrentPage,
  setCategoryId,
  setActiveSize,
} = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;
