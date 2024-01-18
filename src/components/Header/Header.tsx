import React from 'react';
import Text from "../../styles/Text/Text.ts";
import Flex from "../../styles/Flex/Flex.ts";

import {Link} from "react-router-dom";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {px2vw, remCalc, totalPrice} from "../../utils";
import {cartSelector} from "../../redux/reducers/cart/slice.ts";
import {SearchBar} from "../UI/SearchBar/SearchBar.tsx";
import {Button} from "../UI/Button/Button.tsx";


export const Header = () => {
    const {cartItem} = useAppSelector(cartSelector);
    const quantityTotal = cartItem.reduce((total, item) => total + item.quantity, 0);

    return (
        <Flex gap={px2vw(20)} marginBottom={px2vw(80)} alignItems={'center'}>
            <img src="src/assets/logo.svg" alt="pizza-logo"/>
            <Flex display={'inline-block'} flex={1}>
                <Text fontSize={remCalc(24)} fontWeight={800}
                      textTransform={'uppercase'}>Pasta Project</Text>
            </Flex>
            <SearchBar/>
            <Link to='/cart'>
                <Button $variant={'header'}>
                    {formatCurrency(totalPrice(cartItem))}
                    <img src="src/assets/cart.svg" alt="cart"/>
                    {quantityTotal > 0 && <span>{quantityTotal}</span>}
                </Button>
            </Link>
        </Flex>
    );
};
