import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { formatCurrency, px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { TCartItem } from "@/shared/types/cart";
import { Button } from "@/components/UI/Button/Button";
import { useRemoveFromCart } from "@/shared/hooks/useRemoveFromCart";
import { useUpdateQuantity } from "@/shared/hooks/useUpdateQuantity";

export const ModalCartItem = (cartItem: TCartItem) => {
  const { offers, imageSrc, title, type, quantity, price, id } = cartItem;
  const { size, numericSize } = offers;
  const productDetails = `${size} ${numericSize} см, ${type?.toLowerCase()} тесто`;
  const { removeFromCartMutation } = useRemoveFromCart();
  const updateQuantity = useUpdateQuantity();

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
          <Flex alignItems={"center"} gap={px2vw(10)}>
            <Button
              width={"30px"}
              height={"30px"}
              border={"1px solid #FE5F00"}
              color={"#FE5F00"}
              borderRadius={"10px"}
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
              width={"30px"}
              height={"30px"}
              border={"1px solid #FE5F00"}
              color={"#FE5F00"}
              borderRadius={"10px"}
              onClick={() =>
                updateQuantity({
                  id: id!,
                  quantity: quantity + 1,
                })
              }
            >
              +
            </Button>
            <Typography marginLeft={"auto"}>
              {formatCurrency(price && price * quantity)}
            </Typography>
            <button onClick={() => removeFromCartMutation(id!)}>remove</button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
