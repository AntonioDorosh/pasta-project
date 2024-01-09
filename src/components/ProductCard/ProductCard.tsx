import React from 'react';
import ProductItem from "../ProductItem/ProductItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import {TRootObjectProductPizzas} from "../../redux/reducers/data/types.ts";
import {px2vw} from "../../utils";

type TCardProps = {
    product: TRootObjectProductPizzas[]
}

const ProductCard = ({product}: TCardProps) => {
    return (
        <Flex flexWrap={'wrap'} gap={px2vw(35)}>
            {product.map((pizza) => <ProductItem key={pizza.id} {...pizza}/>)}
        </Flex>
    );
};

export default ProductCard;