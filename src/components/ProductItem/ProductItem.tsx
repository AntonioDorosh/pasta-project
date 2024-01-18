import React, {FC, useState} from 'react';
import {TRootObjectProductPizzas} from "../../redux/reducers/data/type.ts";
import Text from "../../styles/Text/Text.ts";
import Flex from "../../styles/Flex/Flex.ts";

import {formatCurrency} from "../../utils/formatCurrency.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore.ts";
import {TCartItem} from "../../redux/reducers/cart/type.ts";
import {addProduct} from "../../redux/reducers/cart/slice.ts";
import {remCalc} from "../../utils";
import {Button} from "../UI/Button/Button.tsx";

export const ProductItem: FC<TRootObjectProductPizzas> = (props) => {
    const pizzaTypes = ['thin', 'traditional'];
    const dispatch = useAppDispatch();
    const {id, price, imageUrl, sizes, title, types} = props;
    const [activeSize, setActiveSize] = useState(0);
    const [activeTypes, setActiveTypes] = useState(0);

    const pizzaCount = useAppSelector((state) => {
        const {cartItem} = state.cart;
        const currentPizza = cartItem.find((obj) => obj.id === id && obj.type === pizzaTypes[activeTypes] && obj.size === sizes[activeSize]);
        return currentPizza ? currentPizza.quantity : 0;
    });
    const onClickAdd = () => {
        const newProduct: TCartItem = {
            imageUrl,
            id,
            price,
            title,
            size: sizes[activeSize],
            type: pizzaTypes[activeTypes],
            quantity: 0
        };
        dispatch(addProduct(newProduct))
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
                {types.map((type, index) => (
                    <Button key={index} $variant={'card'}
                            $isActive={activeTypes === index}
                            onClick={() => setActiveTypes(index)}><Text
                        fontSize={remCalc(14)}
                        fontWeight={700}>{pizzaTypes[type]}</Text></Button>
                ))}
            </div>
            <div>
                {sizes.map((size, index) => (
                    <Button key={index} $variant={'card'}
                            onClick={() => setActiveSize(index)}
                            $isActive={activeSize === index}><Text
                        fontSize={remCalc(14)}
                        fontWeight={400}>{size}cm. </Text></Button>
                ))}
            </div>
            <Flex gap={30} alignItems={'center'} position={'relative'}>
                <Text fontSize={remCalc(20)}
                      fontWeight={700}>{formatCurrency(price)}</Text>
                <Button $variant={'addButton'} onClick={onClickAdd}><Text
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
