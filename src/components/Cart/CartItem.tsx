import React, { FC } from 'react';

import Flex from '../../styles/Flex/Flex.ts';
import Text from '../../styles/Text/Text.ts';
import {
    addProduct,
    removeCurrentProduct,
    removeProduct,
} from '../../redux/reducers/cart/slice.ts';
import { useAppDispatch } from '../../redux/hooks/useStore.ts';
import { formatCurrency } from '../../utils/formatCurrency.ts';
import { px2vw, remCalc } from '../../utils';
import { Button } from '../UI/Button/Button.tsx';
import { QuantityButtons } from './QuantityButtons.tsx';

import type { TCartItem } from '../../redux/reducers/cart/type.ts';

export const CartItem: FC<TCartItem> = props => {
    const dispatch = useAppDispatch();
    const { id, type, title, size, quantity, imageUrl, price } = props;
    const decreaseQnt = () => dispatch(removeProduct({ id, type, size }));
    const increaseQnt = () => dispatch(addProduct({ ...props }));
    const removeHandler = () => dispatch(removeCurrentProduct(id));

    return (
        <Flex justifyContent="space-between" marginBottom={px2vw(40)}>
            <Flex alignItems="center" gap={px2vw(10)}>
                <img width={80} height={80} src={imageUrl} alt={title} />
                <Flex flexDirection="column" maxWidth={px2vw(260)}>
                    <Text fontSize={remCalc(22)} fontWeight={700}>
                        {title}
                    </Text>
                    <Text color="#8D8D8D" fontSize={remCalc(18)}>
                        {type} {size}cm.
                    </Text>
                </Flex>
            </Flex>
            <Flex alignItems="center" gap={px2vw(15)}>
                <QuantityButtons
                    increase={increaseQnt}
                    decrease={decreaseQnt}
                    quantity={quantity}
                />
                <Text fontSize={remCalc(22)} fontWeight={700}>
                    {formatCurrency(price)}
                </Text>
                <Button onClick={removeHandler}>
                    <img src="src/assets/trash.svg" alt="trash" />
                </Button>
            </Flex>
        </Flex>
    );
};
