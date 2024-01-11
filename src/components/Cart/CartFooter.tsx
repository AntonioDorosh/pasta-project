import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import {Link} from "react-router-dom";
import Button from "../UI/Button/Button.tsx";
import {openModal, selectModal} from "../../redux/reducers/modal/slice.ts";
import {ModalType} from "../../redux/reducers/modal/type.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore.ts";
import Form from "../UI/Form/Form.tsx";

const CartFooter = () => {
    const dispatch = useAppDispatch();
    const getModalType = useAppSelector(selectModal);
    const modal = getModalType.isOpen && getModalType.type === ModalType.PAYMENT;

    return (
        <footer>
            <Flex justifyContent={'space-between'}>
                <Link to='/'>
                    <Button $variant={'header'}>
                        Вернуться назад
                    </Button>
                </Link>
                <Button $variant={'header'}
                        onClick={() => dispatch(openModal(ModalType.PAYMENT))}>
                    Оплатить сейчас
                </Button>
                {modal && <Form/>}
            </Flex>
        </footer>
    );
};

export default CartFooter;