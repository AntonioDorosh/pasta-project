import React from "react";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { calculateTotalPrice, formatCurrency, px2vw } from "@/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import boxIcon from "@/assets/images/box.svg";
import percentIcon from "@/assets/images/percent.svg";
import deliveryIcon from "@/assets/images/delivery.svg";
import { SummarySection } from "@/pages/Order/Order.styled";
import { useFetchCart } from "@/shared/hooks/useFetchCart";

export const OrderSummarySection = () => {
  const { cart } = useFetchCart();

  const totalPriceWithTaxAndDelivery = (): number => {
    const taxRate = 0.05;
    const deliveryRate = 0.1;
    const totalPrice = calculateTotalPrice(cart);

    return totalPrice + totalPrice * taxRate + totalPrice * deliveryRate;
  };

  return (
    <SummarySection>
      <Typography as={"h2"} marginBottom={px2vw(58)}>
        Итого: {formatCurrency(totalPriceWithTaxAndDelivery())}
      </Typography>
      <Flex flexDirection={"column"} gap={px2vw(15)}>
        <Flex>
          <img src={boxIcon} alt="box-icon" />
          <Typography marginLeft={px2vw(15)}>
            Стоимость товаров: {formatCurrency(calculateTotalPrice(cart))}
          </Typography>
        </Flex>
        <Flex>
          <img src={percentIcon} alt="percent-icon" />
          <Typography marginLeft={px2vw(15)}>
            Налог: {formatCurrency(calculateTotalPrice(cart) * 0.05)}
          </Typography>
        </Flex>
        <Flex>
          <img src={deliveryIcon} alt="delivery-icon" />
          <Typography as={"p"} marginLeft={px2vw(15)}>
            Доставка: {formatCurrency(calculateTotalPrice(cart) * 0.1)}
          </Typography>
        </Flex>
      </Flex>
    </SummarySection>
  );
};
