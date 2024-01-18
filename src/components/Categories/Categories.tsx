import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Text from "../../styles/Text/Text.ts";
import {px2vw, remCalc} from "../../utils";
import {Button} from "../UI/Button/Button.tsx";

type CategoriesProps = {
    onClickCategory: (id: number) => void
    activeCategory: number
}

export const Categories = ({onClickCategory, activeCategory}: CategoriesProps) => {
    const productCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

    return (
        <Flex as={'ul'} alignItems={'center'} marginBottom={px2vw(40)} flex={1}
              flexWrap={'wrap'}>
            {productCategories.map((categories, index) => (
                <li key={index}>
                    <Button $variant={'category'}
                            $isActive={activeCategory === index}
                            onClick={() => {
                                onClickCategory(index);
                            }}>
                        <Text fontSize={remCalc(14)}
                              fontWeight={700}>{categories}</Text>
                    </Button>
                </li>
            ))}
        </Flex>
    );
};
