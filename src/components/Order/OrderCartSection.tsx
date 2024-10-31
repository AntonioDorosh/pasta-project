import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { formatCurrency, px2vw } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { QuantityControl } from "@/components/QuantityControl/QuantityControl";
import { Button } from "@/components/UI/Button/Button";
import { CartSection } from "@/pages/Order/Order.styled";
import { useRemoveFromCart } from "@/shared/hooks/useRemoveFromCart";
import { useFetchCart } from "@/shared/hooks/useFetchCart";

export const OrderCartSection = () => {
  const { cart } = useFetchCart();
  const removeFromCart = useRemoveFromCart();

  return (
    <CartSection>
      {cart?.map((cartItem) => {
        const { imageSrc, title, quantity, offers, type, id, ingredients } =
          cartItem;

        return (
          <Flex alignItems={"center"} marginBottom={px2vw(20)}>
            <img width={"65px"} src={imageSrc} alt={title} />
            <Flex flexDirection={"column"} marginLeft={px2vw(20)}>
              <Typography fontWeight={700}>{title}</Typography>
              <Typography color={"#A1A1A1"}>
                {offers.size} {offers.numericSize} см, {type}
              </Typography>
              <Typography color={"#A1A1A1"}>
                {ingredients
                  .map((ingredient) => `+ ${ingredient.name}`)
                  .join(", ")}
              </Typography>
            </Flex>
            <Typography marginLeft={px2vw(95)} fontWeight={700}>
              {formatCurrency(offers.price)}
            </Typography>
            <Flex marginLeft={px2vw(95)}>
              <QuantityControl quantity={quantity} id={id} />
            </Flex>
            <Button marginLeft={px2vw(19)} onClick={() => removeFromCart(id!)}>
              X
            </Button>
          </Flex>
        );
      })}
    </CartSection>
  );
};
