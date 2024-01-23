import React from 'react';
import {Button} from "../UI/Button/Button.tsx";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {totalPrice} from "../../utils";
import {Link} from "react-router-dom";
import {TCartItem} from "../../redux/reducers/cart/type.ts";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {cartSelector} from "../../redux/reducers/cart/slice.ts";


const calculateTotalQnt = (cartItem: TCartItem[]) => cartItem.reduce((acc, item) => acc + item.quantity, 0);

export const CartButton = () => {
    const {cartItem} = useAppSelector(cartSelector);
    const quantityTotal = calculateTotalQnt(cartItem);

    return (
        <Link to='/cart'>
            <Button $variant={'header'}>
                {formatCurrency(totalPrice(cartItem))}
                <img src="src/assets/cart.svg" alt="cart"/>
                {quantityTotal > 0 && <span>{quantityTotal}</span>}
            </Button>
        </Link>
    );
};
