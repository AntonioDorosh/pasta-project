import React from 'react';
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {closeModal} from "../../../redux/reducers/modal/slice.ts";
import Modal from "./Modal.tsx";
import {clearCart} from "../../../redux/reducers/cart/slice.ts";
import Text from "../../../styles/Text/Text.ts";
import Flex from "../../../styles/Flex/Flex.ts";
import remCalc from "../../../utils/remCalc.ts";
import Button from "../Button/Button.tsx";

const ModalDialog = () => {
    const dispatch = useAppDispatch();

    const removeHandler = () => {
        dispatch(closeModal());
        dispatch(clearCart());
    };

    return (
        <Modal>
            <Flex flexDirection={'column'}>
                <Text fontSize={remCalc(24)} fontWeight={600} marginBottom={20}>Вы действительно хотите очистить корзину?</Text>
                <Flex gap={20} alignItems={'center'}>
                    <Button onClick={() => dispatch(closeModal())}>Cancel
                    </Button>
                    <Button $variant={'danger'} onClick={removeHandler}>Delete</Button>
                </Flex>
            </Flex>
        </Modal>
    );
};

export default ModalDialog;