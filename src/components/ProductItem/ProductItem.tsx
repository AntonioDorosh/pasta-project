import React, {FC, useState} from 'react';
import {TRootObjectProductPizzas} from "../../redux/reducers/data/type.ts";
import Text from "../../styles/Text/Text.ts";
import Flex from "../../styles/Flex/Flex.ts";

import {formatCurrency} from "../../utils/formatCurrency.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore.ts";
import {addProduct, cartSelector} from "../../redux/reducers/cart/slice.ts";
import {remCalc} from "../../utils";
import {Button} from "../UI/Button/Button.tsx";
import {
    PizzaTypesButtons
} from "../UI/Button/PizzaTypesButtons/PizzaTypesButtons.tsx";
import {findPizzaCount, pizzaTypes} from "../../utils";
import {
    PizzaSizesButtons
} from "../UI/Button/PizzaSizesButtons/PizzaSizesButtons.tsx";

import type {TCartItem} from "../../redux/reducers/cart/type.ts";



export const ProductItem: FC<TRootObjectProductPizzas> = ({id, price, imageUrl, sizes, title, types}) => {
    const dispatch = useAppDispatch();
    const {cartItem} = useAppSelector(cartSelector);
    const [activeSize, setActiveSize] = useState(0);
    const [activeTypes, setActiveTypes] = useState(0);
    const pizzaCount = findPizzaCount(cartItem, id, activeTypes, activeSize, sizes);

    const onClickAdd = () => {
        const newProduct = {
            id,
            imageUrl,
            price,
            title,
            type: pizzaTypes[activeTypes],
            size: sizes[activeSize],
            quantity: 1
        } as TCartItem;
        dispatch(addProduct(newProduct));
    };

    return (
        <Flex as={'li'} flexDirection={'column'} alignItems={'center'}
              justifyContent={'center'} gap={15}>
            <picture>
                <img width={260} height={260} src={imageUrl} alt={title}/>
            </picture>
            <Text marginBottom={22} fontSize={remCalc(20)}
                  fontWeight={500}>{title}</Text>
            <div>
               <PizzaTypesButtons types={types} activeTypes={activeTypes} setActiveTypes={setActiveTypes}/>
            </div>
            <div>
                <PizzaSizesButtons sizes={sizes} activeSize={activeSize} setActiveSize={setActiveSize}/>
            </div>
            <Flex gap={30} alignItems={'center'} position={'relative'}>
                <Text fontSize={remCalc(20)}
                      fontWeight={700}>{formatCurrency(price)}</Text>
                <Button $variant={"addButton"} onClick={onClickAdd}><Text
                    fontWeight={400}>+
                    Добавить</Text></Button>
                {pizzaCount > 0 && (
                    <Flex position={'absolute'} top={-10} right={-5}
                          background={'#EB5A1E'} color={'#FFF'}
                          borderRadius={'50%'} paddingX={2}>
                        <Text>{pizzaCount}</Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};
