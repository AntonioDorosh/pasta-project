import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { formatCurrency, px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { CartItemDto } from "@/shared/types/cart";
import { Button } from "@/components/UI/Button/Button";
import { useUpdateQuantity } from "@/shared/hooks/useUpdateQuantity";

export const ModalCartItem = (cartItem: CartItemDto) => {
  const { offers, imageSrc, title, type, quantity, id } = cartItem;
  const { size, numericSize } = offers;
  const productDetails = `${size} ${numericSize} см, ${type?.toLowerCase()} тесто`;
  const updateQuantity = useUpdateQuantity();

  return (
    <>
      <Flex background={"#FFFFFF"} padding={20} marginBottom={"20px"}>
        <Flex flexDirection={"column"}>
          <img width={"65px"} src={imageSrc} alt={title} />
        </Flex>
        <Flex marginLeft={px2vw(24)} flexDirection={"column"} flex={1}>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography
            fontSize={remCalc(14)}
            color={"#A1A1A1"}
            marginBottom={px2vw(15)}
          >
            {productDetails}
          </Typography>
          <Flex alignItems={"center"} gap={px2vw(10)}>
            <Button
              $variant={"quantity"}
              onClick={() =>
                updateQuantity({
                  id: id!,
                  quantity: quantity - 1,
                })
              }
            >
              -
            </Button>
            <Typography fontWeight={700}>{quantity}</Typography>
            <Button
              $variant={"quantity"}
              onClick={() =>
                updateQuantity({
                  id: id!,
                  quantity: quantity + 1,
                })
              }
            >
              +
            </Button>
            <Typography marginLeft={"auto"} fontWeight={700}>
              {formatCurrency(offers.price)}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
