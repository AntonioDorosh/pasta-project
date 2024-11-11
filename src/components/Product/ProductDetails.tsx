import React from 'react';
import {useFetchProducts} from "@/shared/hooks/useFetchProducts";
import {useParams} from "react-router-dom";
import {Container} from "@/components/Layouts/Container/Container";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {Header} from "@/components/Layouts/Header/Header";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {remCalc} from "@/utils";

export const ProductDetails = () => {
  const {id} = useParams<{ id?: string }>()
  const {products} = useFetchProducts({
    category: 0,
    searchTerm: "",
  });
  const product = products?.find((product) => product.id === id)

  return (
    <Container>
      <Header/>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <img src={product?.imageSrc} alt={product?.title}/>
        <Flex>
          <Typography fontSize={remCalc(34)} fontWeight={800} color={'#373737'}>{product?.title}</Typography>
        </Flex>
      </Flex>
    </Container>
  );
};

