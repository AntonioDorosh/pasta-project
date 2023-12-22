import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";

type CategoriesProps = {
    onClickCategory: (id: number) => void
    activeCategory: number
}

const Categories = ({onClickCategory, activeCategory}: CategoriesProps) => {
    const productCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <>
            <Flex as={'ul'} alignItems={'center'} marginBottom={40} flex={1}
                  flexWrap={'wrap'}>
                {productCategories.map((product, index) => (
                    <li key={index}>
                        <Button $variant={'category'}
                                $isActive={activeCategory === index}
                                onClick={() => {
                                    onClickCategory(index);
                                }}>
                            <Text fontSize={remCalc(14)}
                                  fontWeight={700}>{product}</Text>
                        </Button>
                    </li>
                ))}
            </Flex>
        </>
    );
};

export default Categories;