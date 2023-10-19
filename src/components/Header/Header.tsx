import React from 'react';
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useStore.ts";

const Header = () => {
    const {cartTotalQuantity} = useAppSelector(state => state.cart);

    return (
        <Flex as={'header'} gap={20} marginBottom={80} alignItems={'center'}>
            <img src="src/assets/logo.svg" alt="pizza-logo"/>
            <Flex display={'inline-block'} flex={1}>
                <Text fontSize={remCalc(24)} fontWeight={800}
                      textTransform={'uppercase'}>Pasta Project</Text>
            </Flex>

            <Link to='/cart'>
                <Button $variant={'header'}>
                    <img src="src/assets/cart.svg" alt="cart"/>
                    {cartTotalQuantity}
                </Button>
            </Link>
        </Flex>
    );
};

export default Header;