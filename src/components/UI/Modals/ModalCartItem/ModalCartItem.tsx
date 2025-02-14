import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {formatCurrency, px2vw, remCalc} from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {CartItemDto} from "@/shared/types/cart";
import {QuantityControl} from "@/components/QuantityControl/QuantityControl";
import {useFetchCart} from "@/shared/hooks/cart/useFetchCart";
import {COLORS} from "@/constants/constants";
import {cartService} from "@/shared/services/cart/cart-service";

type ModalCartItemsProps = CartItemDto;

export const ModalCartItem = (cartItem: ModalCartItemsProps) => {
  const {cart} = useFetchCart();
  const {offers, imageSrc, title, type, quantity, id, ingredients} = cartItem;
  const {size, numericSize} = offers;
  const productDetails = `${size} ${numericSize} см, ${type?.toLowerCase()} тесто`;
  const ingredientsDetails = ingredients.map((ingredient) => `+ ${ingredient.name}`).join(", ");

  return (
    <Flex background={COLORS.white} padding={20} marginBottom={"20px"}>
      <Flex flexDirection={"column"}>
        <img width={"65px"} src={imageSrc} alt={title}/>
      </Flex>
      <Flex marginLeft={px2vw(24)} flexDirection={"column"} flex={1}>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontSize={remCalc(14)} color={COLORS.graySecondary}>
          {productDetails}
        </Typography>
        <Typography marginBottom={px2vw(12)} color={COLORS.graySecondary}>
          {ingredientsDetails}
        </Typography>
        <QuantityControl quantity={quantity} id={id}>
          <Typography marginLeft={"auto"} fontWeight={700}>
            {formatCurrency(cartService.calculateCurrentPrice(cart, id))}
          </Typography>
        </QuantityControl>
      </Flex>
    </Flex>
  );
};
