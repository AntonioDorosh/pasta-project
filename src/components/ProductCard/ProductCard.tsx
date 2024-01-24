import React from 'react';
import Flex from "../../styles/Flex/Flex.ts";

import {px2vw} from "../../utils";
import {useAppSelector} from "../../redux/hooks/useStore.ts";
import {productSelector} from "../../redux/reducers/data/slice.ts";
import {ProductItem} from "../ProductItem/ProductItem.tsx";
import {generateId} from "../../utils";

export const ProductCard = () => {
    const {product} = useAppSelector(productSelector);
    const productWithNewId = product.map((product) => {
        return {
            ...product,
            id: generateId()
        }
    });

    const filteredPizzas = productWithNewId.filter((product) => {
        const productValues = Object.values(product);
        const validValues = productValues.some((value) => value === null || value === '' || value === undefined);

        return !validValues
    });


    return (
        <Flex as={'ul'} flexWrap={'wrap'} gap={px2vw(35)}>
            {filteredPizzas?.map((product) => (
                <ProductItem key={product.id} {...product}/>
            ))}
        </Flex>
    );
};
 