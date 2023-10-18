import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useStore.ts";
import {fetchProductData} from "../../redux/reducers/data/slice.ts";
import CardItem from "./CardItem/CardItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";


const Card = () => {
    const {product} = useAppSelector(state => state.product);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProductData())
    }, [dispatch]);

    console.log(product)

    return (
        <Flex flexWrap={'wrap'} gap={55}>
            {product.map((item) => <CardItem key={item.id} {...item}/>)}
        </Flex>
    );
};

export default Card;