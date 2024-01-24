import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Text from "../../styles/Text/Text.ts";
import {px2vw, remCalc} from "../../utils";
import {Button} from "../UI/Button/Button.tsx";
import {productCategories} from "../../utils";

type CategoriesProps = {
    onClickCategory: (id: number) => void
    activeCategory: number
}

export const Categories = ({onClickCategory, activeCategory}: CategoriesProps) => {
    const handleCategoryClick = (index: number) => onClickCategory(index);

    return (
        <Flex as={'ul'} alignItems={'center'} marginBottom={px2vw(40)} flex={1}
              flexWrap={'wrap'}>
            {productCategories.map((categories, index) => (
                <li key={crypto.randomUUID()}>
                    <Button $variant={"category"}
                            $isActive={activeCategory === index}
                            onClick={() => {
                                handleCategoryClick(index);
                            }}>
                        <Text fontSize={remCalc(14)}
                              fontWeight={700}>{categories}</Text>
                    </Button>
                </li>
            ))}
        </Flex>
    );
};
