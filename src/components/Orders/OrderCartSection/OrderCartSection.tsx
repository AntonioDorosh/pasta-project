import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {px2vw, remCalc} from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {CartSection} from "@/pages/Order/Order.styled";
import {useFetchCart} from "@/shared/hooks/cart/useFetchCart";
import {OrderCartList} from "@/components/Orders/OrderCartList/OrderCartList";

export const OrderCartSection = () => {
  const {cart} = useFetchCart();

  return (
    <CartSection>
      <Flex marginBottom={px2vw(20)} justifyContent={"space-between"}>
        <Typography fontSize={remCalc(24)} fontWeight={700}>
          1. Корзина
        </Typography>
      </Flex>
      {cart?.map((cartItem) => <OrderCartList key={cartItem.id} {...cartItem}/>)}
    </CartSection>
  );
};
