import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

type ModalState = {
    isOpen: boolean
};


const initialStat: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialStat,
    reducers: {
        openModal: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        closeModal: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
