import React from 'react';
import CardItem from "./CardItem/CardItem.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import {TRootObjectProductPizzas} from "../../redux/reducers/data/types.ts";

type TCardProps = {
    product: TRootObjectProductPizzas[]
}

const Card = ({product}: TCardProps) => {
    return (
        <Flex flexWrap={'wrap'} gap={55}>
            {product.map((item) => <CardItem key={item.id} {...item}/>)}
        </Flex>
    );
};

export default Card;