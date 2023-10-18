import React, {FC, useState} from 'react';
import {TRootObjectProductPizzas} from "../../../redux/reducers/data/types.ts";
import Text from "../../../styles/Text/Text.ts";
import remCalc from "../../../utils/remCalc.ts";
import Flex from "../../../styles/Flex/Flex.ts";
import {formatCurrency} from "../../../utils/formatCurrency.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/useStore.ts";
import {pizzaTypes} from "../../../utils";
import {TCartItem} from "../../../redux/reducers/cart/types.ts";
import {addToCart} from "../../../redux/reducers/cart/slice.ts";
import Button from "../../UI/Button/Button.tsx";
import {AddButton} from "../../UI/Button/Button.styled.tsx";

const CardItem: FC<TRootObjectProductPizzas> = (props) => {
    const {id, price, imageUrl, sizes, title, types} = props;

    const [activeSize, setActiveSize] = useState(0);
    const [activeTypes, setActiveTypes] = useState(0);
    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        const item: TCartItem = {
            imageUrl,
            id,
            price,
            title,
            size: sizes[activeSize],
            type: pizzaTypes[activeTypes],
            quantity: 0
        };
        dispatch(addToCart(item))
    };

    const pizzaCount = useAppSelector((state) => {
        const cartItem = state.cart.cartItem.filter((obj) => obj.id === id);
        return cartItem.reduce((sum, obj) => {
            return obj.quantity + sum;
        }, 0);
    });


    return (
        <Flex flexDirection={'column'} alignItems={'center'}
              justifyContent={'center'} gap={20} position={'relative'}>
            <img width={260} src={imageUrl} alt={title}/>
            <Text marginBottom={22} fontSize={remCalc(20)}
                  fontWeight={800}>{title}</Text>
            <div>
                {types.map((item, index) => (
                    <Button key={index} $variant={'card'}
                            $isActive={activeTypes === index}
                            onClick={() => setActiveTypes(index)}><Text
                        fontSize={remCalc(14)}
                        fontWeight={700}>{pizzaTypes[item]}</Text></Button>
                ))}
            </div>
            <div>
                {sizes.map((item, index) => (
                    <Button key={index} $variant={'card'}
                            onClick={() => setActiveSize(index)}
                            $isActive={activeSize === index}><Text
                        fontSize={remCalc(14)}
                        fontWeight={700}>{item}см. </Text></Button>
                ))}
            </div>
            <Flex gap={30} alignItems={'center'}>
                <Text fontSize={remCalc(20)}
                      fontWeight={800}>{formatCurrency(price)}</Text>
                <AddButton onClick={onClickAdd}><Text fontWeight={700}>+
                    Добавить</Text></AddButton>
            </Flex>
            {pizzaCount > 0 && (
                <Flex position={'absolute'} top={10} right={20} background={'#EB5A1E'} color={'#FFF'} borderRadius={'50%'} paddingX={2}>
                    <Text>{pizzaCount}</Text>
                </Flex>
            )}
        </Flex>
    );
};

export default CardItem;