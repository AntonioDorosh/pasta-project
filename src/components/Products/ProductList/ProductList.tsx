import React from "react";
import {ProductItem} from "@/components/Products/ProductItem/ProductItem";
import {ProductDto} from "@/shared/types/products";
import {ProductListStyled} from "@/components/Products/ProductList/ProductList.styled";

type ProductCardProps = {
  products: ProductDto[] | undefined;
};

export const ProductList = ({products}: ProductCardProps) => {
  return (
    <ProductListStyled>
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ProductListStyled>
  );
};
