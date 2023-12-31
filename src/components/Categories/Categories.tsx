import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";
import {px2vw} from "../../utils";

type CategoriesProps = {
    onClickCategory: (id: number) => void
    activeCategory: number
}

const Categories = ({onClickCategory, activeCategory}: CategoriesProps) => {
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

export default Categories;