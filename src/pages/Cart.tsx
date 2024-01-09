import React from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks/useStore.ts";
import Layout from "../components/Layout/Layout.tsx";
import Flex from "../styles/Flex/Flex.ts";
import Text from "../styles/Text/Text.ts";
import remCalc from "../utils/remCalc.ts";
import Button from "../components/UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {cartSelector, clearCart} from "../redux/reducers/cart/slice.ts";
import {formatCurrency} from "../utils/formatCurrency.ts";
import {px2vw, totalPrice} from "../utils";
import EmptyCart from "./EmptyCart.tsx";
import CartItem from "../components/CartItem/CartItem.tsx";
import {openModal, selectModal} from "../redux/reducers/modal/slice.ts";
import Modal from "../components/UI/Modal/Modal.tsx";


const Cart = () => {
    const dispatch = useAppDispatch();
    const {cartItem} = useAppSelector(cartSelector);
    const {isOpen} = useAppSelector(selectModal);

    const pizzaCount = cartItem.reduce((acc, obj) => acc + obj.quantity, 0);

    const onClickClear = () => {
        if (window.confirm('are you sure to delete all products?')) {
            dispatch(clearCart())
        }
    };

    return (
        <Layout>
            <Flex gap={20} marginBottom={100}>
                <img src="src/assets/logo.svg" alt="pizza-logo"/>
                <Flex display={'inline-block'} flex={1}>
                    <Text fontSize={remCalc(24)} fontWeight={800}
                          textTransform={'uppercase'}>Pasta Project</Text>
                </Flex>
            </Flex>
            {cartItem.length > 0 ? (
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
                            <Button onClick={onClickClear}>
                                <img src="src/assets/trash.svg" alt="trash"/>
                            </Button>
                            <Text color='#B6B6B6'>Очистить корзину</Text>
                        </Flex>
                    </Flex>
                    {cartItem.map((props) => <CartItem
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
                    <Flex justifyContent={'space-between'}>
                        <Link to='/'>
                            <Button $variant={'header'}>
                                Вернуться назад
                            </Button>
                        </Link>
                        <Button $variant={'header'}
                                onClick={() => dispatch(openModal(true))}>
                            Оплатить сейчас
                        </Button>
                    </Flex>

                </Flex>
            ) : (
                <EmptyCart/>
            )}
            {isOpen && <Modal/>}
        </Layout>
    );
};

export default Cart;