import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { calculateTotalPrice, formatCurrency, px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { CartItemDto } from "@/shared/types/cart";
import { QuantityControl } from "@/components/QuantityControl/QuantityControl";
import { useFetchCart } from "@/shared/hooks/useFetchCart";

export const ModalCartItem = (cartItem: CartItemDto) => {
  const { cart } = useFetchCart();
  const { offers, imageSrc, title, type, quantity, id, ingredients } = cartItem;
  const { size, numericSize } = offers;
  const productDetails = `${size} ${numericSize} см, ${type?.toLowerCase()} тесто`;
  const ingredientsDetails = ingredients
    .map((ingredient) => `+ ${ingredient.name}`)
    .join(", ");
  const totalPrice = calculateTotalPrice(cart);

  return (
    <>
      <Flex background={"#FFFFFF"} padding={20} marginBottom={"20px"}>
        <Flex flexDirection={"column"}>
          <img width={"65px"} src={imageSrc} alt={title} />
        </Flex>
        <Flex marginLeft={px2vw(24)} flexDirection={"column"} flex={1}>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography fontSize={remCalc(14)} color={"#A1A1A1"}>
            {productDetails}
          </Typography>
          <Typography marginBottom={px2vw(20)} color={"#A1A1A1"}>
            {ingredientsDetails}
          </Typography>
          <QuantityControl quantity={quantity} id={id}>
            <Typography marginLeft={"auto"} fontWeight={700}>
              {formatCurrency(totalPrice)}
            </Typography>
          </QuantityControl>
        </Flex>
      </Flex>
    </>
  );
};
