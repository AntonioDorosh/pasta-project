import React from 'react';
import ProductItem from "../ProductItem/ProductItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import {px2vw} from "../../utils";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {productSelector} from "../../redux/reducers/data/slice.ts";

const ProductCard = () => {
    const {product} = useAppSelector(productSelector);

    return (
        <Flex as={'ul'} flexWrap={'wrap'} gap={px2vw(35)}>
            {product.map((pizza) => <ProductItem key={pizza.id} {...pizza}/>)}
        </Flex>
    );
};

export default ProductCard;