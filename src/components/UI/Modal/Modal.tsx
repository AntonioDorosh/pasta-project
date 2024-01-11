import React, {ReactNode} from 'react';
import {ModalClose, ModalStyled, ModalWrapper} from "./Modal.styled.tsx";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {closeModal} from "../../../redux/reducers/modal/slice.ts";
import Flex from "../../../styles/Flex/Flex.ts";
import Text from "../../../styles/Text/Text.ts";
import remCalc from "../../../utils/remCalc.ts";

type TModalProps = {
    children?: ReactNode
}

const Modal = ({children}: TModalProps) => {
    const dispatch = useAppDispatch();

    return (
        <ModalStyled>
            <ModalWrapper>
                <Text fontWeight={600} fontSize={remCalc(20)} marginBottom={10}>Checkout
                    information</Text>
                <Flex gap={20}>
                    <ModalClose onClick={() => dispatch(closeModal(false))}>
                        <img src="src/assets/close.svg" alt="close-button"/>
                    </ModalClose>
                </Flex>
                {children}
            </ModalWrapper>
        </ModalStyled>
    );
};

export default Modal;