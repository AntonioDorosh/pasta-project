import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { formatCurrency, px2vw } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { Link } from "react-router-dom";
import arrowIcon from "@/assets/images/arrow.svg";
import { cartService } from "@/utils/cart-service";

export const ModalCartSummary = () => {
  const { cart } = useFetchCart();

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
          <Typography fontWeight={800}>
            {formatCurrency(cartService.calculateTotalPrice(cart))}
          </Typography>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Typography>Налог 5% :</Typography>
          <Flex
            flex={1}
            borderBottom={"1px dotted #777777"}
            margin={"0 10px"}
          />
          <Typography fontWeight={800}>
            {formatCurrency(cartService.calculateTotalPrice(cart) * 0.05)}
          </Typography>
        </Flex>
        <Link to={"/cart"}>
          <Flex
            as={"button"}
            position={"relative"}
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
    </>
  );
};
