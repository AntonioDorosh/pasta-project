import React from 'react';
import {useAppSelector} from "../redux/hooks/useStore.ts";
import {CartSection} from "../components/Cart/CartSection.tsx";
import {Layout} from "../components/Layout/Layout.tsx";
import {EmptyCart} from "./EmptyCart.tsx";
import {selectCartItems} from "../redux/reducers/cart/slice.ts";


export const Cart = () => {
    const cartItem = useAppSelector(selectCartItems);

    return (
        <Layout>
            {!cartItem.length ? <EmptyCart/> : <CartSection/>}
        </Layout>
    );
};
