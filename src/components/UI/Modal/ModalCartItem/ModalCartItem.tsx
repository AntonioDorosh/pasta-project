import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { TCartItem } from "@/shared/types/cart";
import { useRemoveFromCart } from "@/shared/api/useRemoveFromCart";

export const ModalCartItem = (cartItem: TCartItem) => {
  const { offers, imageSrc, title, type, id } = cartItem;
  const { size, numericSize } = offers;
  const productDetails = `${size} ${numericSize} см, ${type?.toLowerCase()} тесто`;
  const { removeFromCartMutation } = useRemoveFromCart();

  return (
    <>
      <Flex background={"#FFFFFF"} padding={20} marginBottom={"20px"}>
        <Flex flexDirection={"column"}>
          <img width={"65px"} src={imageSrc} alt={title} />
        </Flex>
        <Flex marginLeft={px2vw(24)} flexDirection={"column"}>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography fontSize={remCalc(14)} color={"#A1A1A1"}>
            {productDetails}
          </Typography>
        </Flex>
        <button onClick={() => id && removeFromCartMutation(id)}>remove</button>
      </Flex>
    </>
  );
};
