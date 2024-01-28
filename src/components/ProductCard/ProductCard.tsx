import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";

import {px2vw} from "../../utils";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {
    selectProduct
} from "../../redux/reducers/data/slice.ts";
import {ProductItem} from "../ProductItem/ProductItem.tsx";

export const ProductCard = () => {
    const product = useAppSelector(selectProduct);
    const productWithNewId = product?.map((product) => {
        return {
            ...product,
            id: crypto.randomUUID()
        }
    });

    const filteredPizzas = productWithNewId.filter((product) => Object.values(product).every((value) => value !== null));


    return (
        <Flex as={'ul'} flexWrap={'wrap'} gap={px2vw(35)}>
            {filteredPizzas?.map((product) => <ProductItem key={product.id} {...product}/>)}
        </Flex>
    );
};
 