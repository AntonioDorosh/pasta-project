import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Text from "../../styles/Text/Text.ts";

import {px2vw, remCalc, totalPrice} from "../../utils";
import {openModal, selectModal} from "../../redux/reducers/modal/slice.ts";
import {ModalType} from "../../redux/reducers/modal/type.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore.ts";
import {CartFooter} from "./CartFooter.tsx";
import {CartItem} from "./CartItem.tsx";
import {ModalDialog} from "../UI/Modal/ModalDialog.tsx";
import {Button} from "../UI/Button/Button.tsx";
import {selectCartItems} from "../../redux/reducers/cart/slice.ts";

export const CartSection = () => {
    const cartItem = useAppSelector(selectCartItems);
    const dispatch = useAppDispatch();
    const pizzaCount = cartItem.reduce((acc, obj) => acc + obj.quantity, 0);
    const getModalType = useAppSelector(selectModal);
    const modal = getModalType.isOpen && getModalType.type === ModalType.dialog;

    return (
        <section>
            <Flex gap={20} marginBottom={100}>
                <img src="src/assets/logo.svg" alt="pizza-logo"/>
                <Flex display={'inline-block'} flex={1}>
                    <Text fontSize={remCalc(24)} fontWeight={800}
                          textTransform={'uppercase'}>Pasta Project</Text>
                </Flex>
            </Flex>
            <Flex maxWidth={remCalc(760)} flexDirection={'column'}
                  marginX={'auto'}
                  gap={px2vw(20)}>
                <Flex alignItems={'center'} marginBottom={px2vw(60)}
                      justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={10}>
                        <img src="src/assets/cart-black.svg" alt="cart"/>
                        <Text fontSize={remCalc(32)}
                              fontWeight={700}>Корзина</Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Button
                            onClick={() => dispatch(openModal(ModalType.dialog))}>
                            <img src="src/assets/trash.svg" alt="trash"/>
                        </Button>
                        {modal && <ModalDialog/>}
                        <Text color='#B6B6B6'>Очистить корзину</Text>
                    </Flex>
                </Flex>
                {cartItem?.map((props) => <CartItem
                    key={crypto.randomUUID()} {...props}/>)}
                <Flex alignItems={'center'} justifyContent={'space-between'}
                      marginBottom={40}>
                <span style={{
                    fontSize: remCalc(22),
                }}>Всего пицц: <Text fontSize={remCalc(22)}

                                     fontWeight={700}>{pizzaCount}</Text></span>
                    <span>Сумма заказа: <Text color='#FE5F1E'
                                              fontSize={remCalc(22)}
                                              fontWeight={700}>{formatCurrency(totalPrice(cartItem))}</Text></span>
                </Flex>
                <CartFooter/>
            </Flex>
        </section>
    );
};
