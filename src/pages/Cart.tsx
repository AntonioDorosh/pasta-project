import React from 'react';
import {useAppSelector} from "../redux/hooks/useStore.ts";
import Layout from "../components/Layout/Layout.tsx";
import {cartSelector} from "../redux/reducers/cart/slice.ts";
import EmptyCart from "./EmptyCart.tsx";
import CartSection from "../components/Cart/CartSection.tsx";


const Cart = () => {
    const {cartItem} = useAppSelector(cartSelector);

    return (
        <Layout>
            {cartItem.length === 0 ? <EmptyCart/> : <CartSection/>}
        </Layout>
    );
};

export default Cart;