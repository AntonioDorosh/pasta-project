import React from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks/useStore.ts";
import Layout from "../components/Layout/Layout.tsx";
import Flex from "../styles/Flex/Flex.ts";
import Text from "../styles/Text/Text.ts";
import remCalc from "../utils/remCalc.ts";
import Button from "../components/UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {cartSelector, clearCart} from "../redux/reducers/cart/slice.ts";
import CartItem from "../components/CartItem/CartItem.tsx";
import {formatCurrency} from "../utils/formatCurrency.ts";
import {totalPrice} from "../utils";
import EmptyCart from "./EmptyCart.tsx";


const Cart = () => {
    const dispatch = useAppDispatch();
    const {cartItem, totalQnt} = useAppSelector(cartSelector);

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
                <Flex maxWidth={750} flexDirection={'column'} marginX={'auto'}
                      gap={20}>
                    <Flex alignItems={'center'} marginBottom={60}
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
                    {cartItem.map((item) => <CartItem
                        key={item.id} {...item}/>)}
                    <Flex alignItems={'center'} justifyContent={'space-between'}
                          marginBottom={40}>
                <span style={{
                    fontSize: remCalc(22),
                }}>Всего пицц: <Text fontSize={remCalc(22)}
                                     fontWeight={700}>{totalQnt}</Text></span>
                        <span>Сумма заказа: <Text color='#FE5F1E'
                                                  fontSize={remCalc(22)}
                                                  fontWeight={700}>{formatCurrency(totalPrice(cartItem))}</Text></span>
                    </Flex>
                    <Link to='/'>
                        <Button $variant={'header'}>
                            Вернуться назад
                        </Button>
                    </Link>
                </Flex>
            ) : (
                <EmptyCart/>
            )}
        </Layout>
    );
};

export default Cart;