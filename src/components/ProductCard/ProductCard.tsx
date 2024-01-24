import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";

import {px2vw} from "../../utils";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {productSelector} from "../../redux/reducers/data/slice.ts";
import {ProductItem} from "../ProductItem/ProductItem.tsx";
import {generateId} from "../../utils/generateId.ts";

export const ProductCard = () => {
    const {product} = useAppSelector(productSelector);
    const filteredProducts = product.filter((product) => {
        return !Object.values(product).some((value) => value === null || value === '' || value === undefined);
    });

    const pizzaProduct = filteredProducts.map((product) => {
        return {
            ...product,
            id: generateId()
        }
    });

    return (
        <Flex as={'ul'} flexWrap={'wrap'} gap={px2vw(35)}>
            {pizzaProduct?.map((product) => (
                <ProductItem key={product.id} {...product}/>
            ))}
        </Flex>
    );
};
 