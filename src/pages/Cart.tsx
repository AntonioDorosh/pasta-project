import React from 'react';
import {useAppSelector} from "../redux/hooks/useStore.ts";
import {CartSection} from "../components/Cart/CartSection.tsx";
import {cartSelector} from "../redux/reducers/cart/slice.ts";
import {Layout} from "../components/Layout/Layout.tsx";
import {EmptyCart} from "./EmptyCart.tsx";


export const Cart = () => {
    const {cartItem} = useAppSelector(cartSelector);

    return (
        <Layout>
            {cartItem.length === 0 ? <EmptyCart/> : <CartSection/>}
        </Layout>
    );
};
