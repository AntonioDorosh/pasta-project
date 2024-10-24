import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { calculateTotalPrice, formatCurrency, px2vw } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { Link } from "react-router-dom";

export const ModalCartSummary = () => {
  const { cart } = useFetchCart();
  const totalPrice = calculateTotalPrice(cart);

  return (
    <>
      <Flex
        marginTop={"auto"}
        background={"#FFFFFF"}
        flexDirection={"column"}
        padding={px2vw(10)}
        gap={px2vw(5)}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Typography>Итого:</Typography>
          <Flex
            flex={1}
            borderBottom={"1px dotted #777777"}
            margin={"0 10px"}
          />
          <Typography fontWeight={800}>{formatCurrency(totalPrice)}</Typography>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Typography>Налог 5% :</Typography>
          <Flex
            flex={1}
            borderBottom={"1px dotted #777777"}
            margin={"0 10px"}
          />
          <Typography fontWeight={800}>
            {formatCurrency(totalPrice * 0.05)}
          </Typography>
        </Flex>
        <Link to={"/cart"}>
          <Flex
            as={"button"}
            background={"#FE5F00"}
            color={"#FFFFFF"}
            width={"100%"}
            border={"none"}
            padding={"16px 35px"}
            borderRadius={"18px"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            Оформить заказ
          </Flex>
        </Link>
      </Flex>
    </>
  );
};
