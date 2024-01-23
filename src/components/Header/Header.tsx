import React from 'react';
import Text from "../../styles/Text/Text.ts";
import Flex from "../../styles/Flex/Flex.ts";
import {px2vw, remCalc} from "../../utils";
import {SearchBar} from "../UI/SearchBar/SearchBar.tsx";
import {CartButton} from "../Cart/CartButton.tsx";


export const Header = () => {

    return (
        <Flex gap={px2vw(20)} marginBottom={px2vw(80)} alignItems={'center'}>
            <img src="src/assets/logo.svg" alt="pizza-logo"/>
            <Flex display={'inline-block'} flex={1}>
                <Text fontSize={remCalc(24)} fontWeight={800}
                      textTransform={'uppercase'}>Pasta Project</Text>
            </Flex>
            <SearchBar/>
            <CartButton/>
        </Flex>
    );
};
