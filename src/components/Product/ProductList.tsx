import React from "react";
import { ProductItem } from "@/components/Product/ProductItem";
import { ProductDto } from "@/shared/types/products";
import { ProductListStyled } from "@/components/Product/ProductList.styled";

type ProductCardProps = {
  products: ProductDto[] | undefined;
};

export const ProductList = ({ products }: ProductCardProps) => {
  return (
    <ProductListStyled>
      {products &&
        products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </ProductListStyled>
  );
};
