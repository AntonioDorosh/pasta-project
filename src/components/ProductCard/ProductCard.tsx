import React from 'react';
import { useAppSelector } from '../../redux/hooks/useStore.ts';
import { selectProduct } from '../../redux/reducers/data/slice.ts';
import { ProductItem } from '../ProductItem/ProductItem.tsx';
import { GridLayout } from '../Layout/Grid/GridLayout.tsx';

export const ProductCard = () => {
    const product = useAppSelector(selectProduct);

    const filteredPizzas = product.filter(product =>
        Object.values(product).every(value => value !== null),
    );

    return (
        <GridLayout $columnsAmount={5}>
            {filteredPizzas?.map(product => (
                <ProductItem key={product.id} {...product} />
            ))}
        </GridLayout>
    );
};
