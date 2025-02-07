import React from 'react';
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {COLORS, formatCurrency} from "@/utils";
import {QuantityControl} from "@/components/QuantityControl/QuantityControl";
import {Button} from "@/components/UI/Button/Button";
import {CartItemDto} from "@/shared/types/cart";
import {useRemoveFromCart} from "@/shared/hooks/useRemoveFromCart";

type OrderCartListProps = CartItemDto

export const OrderCartList = (props: OrderCartListProps) => {
  const {id, imageSrc, quantity, type, ingredients, price, offers, title} = props;

  const removeFromCart = useRemoveFromCart();
  return (
    <>
      <Flex key={id} alignItems={"center"} minWidth={"762px"} gap={20}>
        <img width={"65px"} src={imageSrc} alt={title}/>
        <Flex flexDirection={"column"} maxWidth={"300px"}>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography color={COLORS.graySecondary}>
            {`${offers.size} ${offers.numericSize} см, ${type} тесто`}
          </Typography>
          <Typography color={COLORS.graySecondary}>
            {ingredients
              .map((ingredient) => `+ ${ingredient.name}`)
              .join(", ")}
          </Typography>
        </Flex>
        <Flex
          flex={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={30}
        >
          <Typography fontWeight={800}>
            {formatCurrency(price)}
          </Typography>
          <QuantityControl quantity={quantity} id={id}/>
          <Button onClick={() => removeFromCart(id!)}>X</Button>
        </Flex>
      </Flex>
    </>
  );
};

