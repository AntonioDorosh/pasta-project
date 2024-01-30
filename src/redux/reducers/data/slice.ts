import {EStatus, TProductState, TRootObjectProductPizzas} from "./type.ts";
import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";
import {API_URL, createQuery} from "../../../utils";

const createAppSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator}
});

const initialState = {
    product: [],
    status: EStatus.LOADING,
    error: '',
} as TProductState;

const productSlice = createAppSlice({
    name: 'product',
    initialState,
    selectors: {
        selectProduct: (state) => state.product,
        selectStatus: (state) => state.status
    },
    reducers: (create) => ({
        fetchData: create.asyncThunk(
            async (params, thunkAPI): Promise<TRootObjectProductPizzas[]> => {
                const query = createQuery(params);
                try {
                    const response = await fetch(`${API_URL}${query}`);

                    return response.json()
                } catch (error) {
                    return thunkAPI.rejectWithValue(error) as never;
                }
            },
            {
                pending: (state) => {
                    state.status = EStatus.LOADING;
                },
                fulfilled: (state, action) => {
                    state.status = EStatus.SUCCESS;
                    state.product = action.payload;
                },
                rejected: (state, action) => {
                    state.status = EStatus.ERROR;
                    state.error = action.error.message as string;
                }
            }
        ),
    }),
});

export const {fetchData} = productSlice.actions;

export const {selectProduct, selectStatus} = productSlice.selectors;

export const product = productSlice.reducer;




