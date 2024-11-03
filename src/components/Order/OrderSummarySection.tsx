import React from "react";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { formatCurrency, px2vw } from "@/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import boxIcon from "@/assets/images/box.svg";
import percentIcon from "@/assets/images/percent.svg";
import deliveryIcon from "@/assets/images/delivery.svg";
import { SummarySection } from "@/pages/Order/Order.styled";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { cartService } from "@/utils/cart-service";

export const OrderSummarySection = () => {
  const { cart } = useFetchCart();

  return (
    <SummarySection>
      <Typography as={"h2"} marginBottom={px2vw(20)}>
        Итого: {formatCurrency(cartService.totalPriceWithTaxAndDelivery(cart))}
      </Typography>
      <Flex flexDirection={"column"} gap={px2vw(15)}>
        <Flex>
          <img src={boxIcon} alt="box-icon" />
          <Typography marginLeft={px2vw(15)}>
            Стоимость товаров:{" "}
            {formatCurrency(cartService.calculateTotalPrice(cart))}
          </Typography>
        </Flex>
        <Flex>
          <img src={percentIcon} alt="percent-icon" />
          <Typography marginLeft={px2vw(15)}>
            Налог:{" "}
            {formatCurrency(cartService.calculateTotalPrice(cart) * 0.05)}
          </Typography>
        </Flex>
        <Flex>
          <img src={deliveryIcon} alt="delivery-icon" />
          <Typography as={"p"} marginLeft={px2vw(15)}>
            Доставка:{" "}
            {formatCurrency(cartService.calculateTotalPrice(cart) * 0.1)}
          </Typography>
        </Flex>
      </Flex>
    </SummarySection>
  );
};
