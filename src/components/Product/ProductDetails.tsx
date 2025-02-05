import React from 'react';
import {useParams} from "react-router-dom";
import {Container} from "@/components/Layouts/Container/Container";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {Header} from "@/components/Layouts/Header/Header";
import {useFetchProducts} from "@/shared/hooks/useFetchProducts";

export const ProductDetails = () => {
  const {id} = useParams<{ id?: string }>()
  const {products} = useFetchProducts({
    category: 0
  })
  const product = products?.find((product) => product.id === id)

  return (
    <Container>
      <Header/>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <img src={product?.imageSrc} alt={product?.title}/>
      </Flex>
    </Container>
  );
};

