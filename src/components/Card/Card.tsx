import React from 'react';
import ProductCardItem from "./ProductCardItem/ProductCardItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import {TRootObjectProductPizzas} from "../../redux/reducers/data/types.ts";

type TCardProps = {
    product: TRootObjectProductPizzas[]
}

const Card = ({product}: TCardProps) => {
    return (
        <Flex flexWrap={'wrap'} gap={55}>
            {product.map((item) => <ProductCardItem key={item.id} {...item}/>)}
        </Flex>
    );
};

export default Card;