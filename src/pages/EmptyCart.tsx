import React from 'react';
import Text from "../styles/Text/Text.ts";
import remCalc from "../utils/remCalc.ts";
import {Link} from "react-router-dom";
import Button from "../components/UI/Button/Button.tsx";
import Flex from "../styles/Flex/Flex.ts";

const EmptyCart = () => {
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
    );
};

export default EmptyCart;