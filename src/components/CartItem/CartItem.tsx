import React, {FC} from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";
import Button from "../UI/Button/Button.tsx";
import {
    addProduct,
    removeCurrentProduct,
    removeProduct,
} from "../../redux/reducers/cart/slice.ts";
import {TCartItem} from "../../redux/reducers/cart/types.ts";
import {useAppDispatch} from "../../redux/hooks/useStore.ts";
import {formatCurrency} from "../../utils/formatCurrency.ts";

const CartItem: FC<TCartItem> = (props) => {
    const dispatch = useAppDispatch();
    const {id, type, title, size, quantity, imageUrl, price} = props;
    const decreaseQnt = () => dispatch(removeProduct({id, type, size}))
    const increaseQnt = () => dispatch(addProduct({...props}))
    const removeHandler = () => dispatch(removeCurrentProduct(id))

    return (
        <>
            <Flex justifyContent={'space-between'} marginBottom={40}>
                <Flex alignItems={'center'} gap={10}>
                    <img width={80} height={80} src={imageUrl}
                         alt={title}/>
                    <Flex flexDirection={'column'} maxWidth={260}>
                        <Text fontSize={remCalc(22)}
                              fontWeight={700}>{title}</Text>
                        <Text color={'#8D8D8D'}
                              fontSize={remCalc(18)}>{type} {size}см.</Text>
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} gap={15}>
                    <Button
                        onClick={decreaseQnt}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="32" height="32"
                             viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15"
                                    fill="white" stroke="#FE5F1E"
                                    strokeWidth="2"/>
                            <path
                                d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                                fill="#FE5F1E"/>
                        </svg>
                    </Button>
                    <Text fontSize={remCalc(22)}
                          fontWeight={700}>{quantity}</Text>
                    <Button
                        onClick={increaseQnt}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="32" height="32"
                             viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15"
                                    fill="white" stroke="#FE5F1E"
                                    strokeWidth="2"/>
                            <path
                                d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                                fill="#EB5A1E"/>
                        </svg>
                    </Button>
                    <Text fontSize={remCalc(22)}
                          fontWeight={700}>{formatCurrency(price)}</Text>
                    <Button onClick={removeHandler}>
                        <img src="src/assets/trash.svg" alt="trash"/>
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default CartItem;