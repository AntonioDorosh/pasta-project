import React from "react";
import { useAppSelector } from "../../redux/hooks/useStore.ts";
import { selectProduct } from "../../redux/reducers/data/slice.ts";
import { ProductItem } from "../ProductItem/ProductItem.tsx";
import { GridLayout } from "../Layout/Grid/GridLayout.tsx";
import { filteredPizzas } from "../../utils";

export const ProductCard = () => {
  const product = useAppSelector(selectProduct);
  const filteredProduct = filteredPizzas(product);

  return (
    <GridLayout $columnsAmount={5}>
      {filteredProduct?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </GridLayout>
  );
};
