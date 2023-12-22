import React from 'react';
import ProductItem from "./ProductItem/ProductItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import {TRootObjectProductPizzas} from "../../redux/reducers/data/types.ts";

type TCardProps = {
    product: TRootObjectProductPizzas[]
}

const ProductCard = ({product}: TCardProps) => {
    return (
        <Flex flexWrap={'wrap'} gap={55}>
            {product.map((pizza) => <ProductItem key={pizza.id} {...pizza}/>)}
        </Flex>
    );
};

export default ProductCard;