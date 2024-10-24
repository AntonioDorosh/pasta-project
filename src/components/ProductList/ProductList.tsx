import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { ProductItem } from "@/components/ProductItem/ProductItem";
import { px2vw } from "@/utils";
import { TProduct } from "@/shared/types/products";

type ProductCardProps = {
  products: TProduct[] | undefined;
};

export const ProductList = ({ products }: ProductCardProps) => {
  return (
    <Flex
      as={"section"}
      display={"grid"}
      gridTemplateColumns={"repeat(3, minmax(350px, 1fr))"}
      gap={px2vw(30)}
    >
      {products &&
        products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </Flex>
  );
};
