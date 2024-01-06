import React from 'react';
import {ModalClose, ModalStyled, ModalWrapper} from "./Modal.styled.tsx";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/useStore.ts";
import {closeModal} from "../../../redux/reducers/modal/slice.ts";
import Flex from "../../../styles/Flex/Flex.ts";
import {cartSelector} from "../../../redux/reducers/cart/slice.ts";

const Modal = () => {
    const dispatch = useAppDispatch();
    const {cartItem} = useAppSelector(cartSelector);

    return (
        <ModalStyled>
            <ModalWrapper>
                <Flex marginBottom={40}>
                    <h1>Order</h1>
                    <ModalClose onClick={() => dispatch(closeModal(false))}>
                        <img src="src/assets/close.svg" alt="close"/>
                    </ModalClose>
                </Flex>
                <Flex as={'ul'} flexDirection={'column'} gap={20}>
                    {cartItem.map((obj, index) => (
                        <Flex as={'li'} key={index} alignItems={'center'}>
                            <img width={70} height={70} src={obj.imageUrl}
                                 alt={obj.title}/>
                            <Flex flexDirection={'column'} marginLeft={20}>
                                <p>{obj.title}</p>
                                <b>{obj.price} $</b>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </ModalWrapper>
        </ModalStyled>
    );
};

export default Modal;