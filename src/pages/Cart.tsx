import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/useStore.ts";
import Layout from "../components/Layout/Layout.tsx";
import Flex from "../styles/Flex/Flex.ts";
import Text from "../styles/Text/Text.ts";
import remCalc from "../utils/remCalc.ts";
import Button from "../components/UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {clearCart} from "../redux/reducers/cart/slice.ts";
import CartItem from "../components/CartItem/CartItem.tsx";


const Cart = () => {
    const dispatch = useAppDispatch();
    const {cartItem,} = useAppSelector(state => state.cart);

    const onClickClear = () => {
        if (window.confirm('are you sure to delete all products?')) {
            dispatch(clearCart())
        }
    };

    const emptyPage = () => {
        return (
            <Flex flexDirection={'column'} alignItems={'center'} gap={20}>
                <Text fontSize={remCalc(32)} fontWeight={700}>Корзина пустая
                    😕</Text>
                <Text maxWidth={550} textAlign={'center'} color={'#777'}>Вероятней
                    всего, вы не заказывали ещё пиццу.
                    Для того, чтобы заказать пиццу, перейди на главную
                    страницу.</Text>
                <img src="src/assets/cart-empty.svg" alt="empty-cart"/>
                <Link to='/'>
                    <Button $variant={'header'}>Вернуться назад</Button>
                </Link>
            </Flex>
        )
    };

    return (
        <Layout>
            <Flex gap={20} marginBottom={100}>
                <img src="src/assets/logo.svg" alt="pizza-logo"/>
                <Flex display={'inline-block'} flex={1}>
                    <Text fontSize={remCalc(24)} fontWeight={800}
                          textTransform={'uppercase'}>Pasta Project</Text>
                    <Text color={'#7B7B7B'}>best pizzas in the world!</Text>
                </Flex>
            </Flex>
            {cartItem.length > 0 ? (
                <Flex maxWidth={500} flexDirection={'column'} marginX={'auto'} gap={20}>
                    <Flex alignItems={'center'} marginBottom={60}
                          justifyContent={'space-between'}>
                        <Flex alignItems={'center'} gap={10}>
                            <img src="src/assets/cart-black.svg" alt="cart"/>
                            <Text fontSize={remCalc(32)} fontWeight={700}>Корзина</Text>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Button onClick={onClickClear}>
                                <img src="src/assets/trash.svg" alt="trash"/>
                            </Button>
                            <Text color='#B6B6B6'>Очистить корзину</Text>
                        </Flex>
                    </Flex>
                    {cartItem.map((item) => <CartItem key={item.id} {...item}/>)}
                </Flex>
            ) : (
                emptyPage()
            )}
        </Layout>
    );
};

export default Cart;