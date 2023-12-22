import React from 'react';
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import SearchBar from "../UI/SearchBar/SearchBar.tsx";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {totalPrice} from "../../utils";

const Header = () => {
    const {cartItem} = useAppSelector(state => state.cart);

    const quantityTotal = cartItem.reduce((total, item) => total + item.quantity, 0);

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
                    {formatCurrency(totalPrice(cartItem))}
                    <img src="src/assets/cart.svg" alt="cart"/>
                    {quantityTotal > 0 && <span>{quantityTotal}</span>}
                </Button>
            </Link>

        </Flex>
    );
};

export default Header;