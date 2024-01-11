import React, {ReactNode} from 'react';
import {ModalClose, ModalStyled, ModalWrapper} from "./Modal.styled.tsx";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {closeModal} from "../../../redux/reducers/modal/slice.ts";

type ModalProps = {
    children: ReactNode
}

const Modal = ({children}: ModalProps) => {

    const dispatch = useAppDispatch();

    return (
        <ModalStyled>
            <ModalWrapper>
                <ModalClose onClick={() => dispatch(closeModal())}>
                    <img src="src/assets/close.svg" alt=""/>
                </ModalClose>
                {children}
            </ModalWrapper>
        </ModalStyled>
    );
};

export default Modal;