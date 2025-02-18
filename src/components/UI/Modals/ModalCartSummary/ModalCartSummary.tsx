import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {formatCurrency, px2vw} from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {Link} from "react-router-dom";
import arrowIcon from "@/assets/images/arrow.svg";
import {COLORS} from "@/constants/constants";
import {cartService} from "@/shared/services/cart/cart-service";
import {CartItemDto} from "@/shared/types/cart";

type ModalCartSummaryProps = {
  cart: CartItemDto[] | undefined;
}

export const ModalCartSummary = ({cart}: ModalCartSummaryProps) => {
  const cartWithTaxes = cartService.calculateWithTax(cart);

  return (
    <Flex
      marginTop={"auto"}
      background={COLORS.white}
      flexDirection={"column"}
      padding={px2vw(10)}
      gap={px2vw(5)}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Typography>Итого:</Typography>
        <Flex
          flex={1}
          borderBottom={`1px dotted ${COLORS.gray}`}
          margin={"0 10px"}
        />
        <Typography fontWeight={800}>
          {formatCurrency(cartService.calculateTotalPrice(cart))}
        </Typography>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Typography>Налог 5% :</Typography>
        <Flex
          flex={1}
          borderBottom={`1px dotted ${COLORS.gray}`}
          margin={"0 10px"}
        />
        <Typography fontWeight={800}>
          {formatCurrency(cartWithTaxes)}
        </Typography>
      </Flex>
      <Link to={"/cart"}>
        <Flex
          as={"button"}
          position={"relative"}
          background={COLORS.primary}
          color={COLORS.white}
          width={"100%"}
          border={"none"}
          padding={"16px 35px"}
          borderRadius={"18px"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          Оформить заказ
          <Flex
            position={"absolute"}
            top={"37%"}
            right={"27%"}
            width={"20px"}
            height={"20px"}
            backgroundImage={`url(${arrowIcon})`}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"cover"}
          />
        </Flex>
      </Link>
    </Flex>
  );
};
