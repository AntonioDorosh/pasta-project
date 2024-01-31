import React, { useCallback } from 'react';
import Flex from '../../styles/Flex/Flex.ts';
import Text from '../../styles/Text/Text.ts';
import { productCategories, px2vw, remCalc } from '../../utils';
import { Button } from '../UI/Button/Button.tsx';
import { useAppDispatch } from '../../redux/hooks/useStore.ts';
import { setCategoryId } from '../../redux/reducers/filter/slice.ts';

type CategoriesProps = {
    activeCategory: number;
};

export const Categories = ({ activeCategory }: CategoriesProps) => {
    const dispatch = useAppDispatch();
    const onChangeCategory = useCallback(
        (id: number) => dispatch(setCategoryId(id)),
        [],
    );

    return (
        <Flex
            as={'ul'}
            alignItems={'center'}
            marginBottom={px2vw(40)}
            flex={1}
            flexWrap={'wrap'}
        >
            {productCategories.map((category, index) => {
                const buttonText = (
                    <Text fontSize={remCalc(14)} fontWeight={700}>
                        {category}
                    </Text>
                );
                return (
                    <li key={index}>
                        <Button
                            $variant="category"
                            $isActive={activeCategory === index}
                            onClick={() => onChangeCategory(index)}
                        >
                            {buttonText}
                        </Button>
                    </li>
                );
            })}
        </Flex>
    );
};
