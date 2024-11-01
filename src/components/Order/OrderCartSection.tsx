import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { formatCurrency, px2vw, remCalc } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { CartSection } from "@/pages/Order/Order.styled";
import { useRemoveFromCart } from "@/shared/hooks/useRemoveFromCart";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { QuantityControl } from "@/components/QuantityControl/QuantityControl";
import { Button } from "@/components/UI/Button/Button";

export const OrderCartSection = () => {
  const { cart } = useFetchCart();
  const removeFromCart = useRemoveFromCart();

  return (
    <>
      <CartSection>
        <Flex marginBottom={px2vw(20)} justifyContent={"space-between"}>
          <Typography fontSize={remCalc(24)} fontWeight={700}>
            1. Корзина
          </Typography>
        </Flex>
        {cart?.map((cartItem) => {
          const {
            id,
            ingredients,
            type,
            offers,
            quantity,
            title,
            imageSrc,
            price,
          } = cartItem;

          return (
            <Flex alignItems={"center"} minWidth={"762px"}>
              <img width={"65px"} src={imageSrc} alt={title} />
              <Flex flexDirection={"column"} marginLeft={px2vw(20)}>
                <Typography fontWeight={700}>{title}</Typography>
                <Typography color={"#A1A1A1"}>
                  {`${offers.size} ${offers.numericSize} см, ${type} тесто`}
                </Typography>
              </Flex>
              <Flex flex={1} justifyContent={"flex-end"} alignItems={"center"}>
                <Typography marginRight={px2vw(50)} fontWeight={800}>
                  {formatCurrency(price)}
                </Typography>
                <QuantityControl quantity={quantity} id={id} />
                <Button
                  onClick={() => removeFromCart(id!)}
                  marginLeft={px2vw(10)}
                >
                  X
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </CartSection>
    </>
  );
};
