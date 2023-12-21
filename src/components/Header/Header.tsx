import React from 'react';
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {cartSelector} from "../../redux/reducers/cart/slice.ts";
import SearchBar from "../UI/SearchBar/SearchBar.tsx";

const Header = () => {
    const cartTotalAmount = useAppSelector(cartSelector.cartTotalAmount);
    const cartTotalQuantity = useAppSelector(cartSelector.cartTotalQuantity);

    return (
        <Flex as={'header'} gap={20} marginBottom={80} alignItems={'center'}>
            <img src="src/assets/logo.svg" alt="pizza-logo"/>
            <Flex display={'inline-block'} flex={1}>
                <Text fontSize={remCalc(24)} fontWeight={800}
                      textTransform={'uppercase'}>Pasta Project</Text>
            </Flex>
            <SearchBar/>
            <Link to='/cart'>
                <Button $variant={'header'}>
                    {formatCurrency(cartTotalAmount)}
                    <img src="src/assets/cart.svg" alt="cart"/>
                    {cartTotalQuantity > 0 && <span>{cartTotalQuantity}</span>}
                </Button>
            </Link>
        </Flex>
    );
};

export default Header;