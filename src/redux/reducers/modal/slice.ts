import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {ModalType, TModalState} from "./type.ts";

const initialState: TModalState = {
    isOpen: false,
    type: undefined
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalType>) => {
            state.isOpen = true;
            state.type = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = undefined;
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
