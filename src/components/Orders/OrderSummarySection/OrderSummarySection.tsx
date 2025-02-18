import React, {FC} from "react";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {formatCurrency, px2vw} from "@/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import boxIcon from "@/assets/images/box.svg";
import percentIcon from "@/assets/images/percent.svg";
import deliveryIcon from "@/assets/images/delivery.svg";
import {SummarySection} from "@/pages/Order/Order.styled";
import {cartService} from "@/shared/services/cart/cart-service";
import {CartItemDto} from "@/shared/types/cart";

type OrderSummarySectionProps = {
  cart: CartItemDto[] | undefined;
}

export const OrderSummarySection: FC<OrderSummarySectionProps> = ({cart}) => {
  const totalPrice = cartService.calculateTotalPrice(cart);
  const cartPriceWithDelivery = cartService.calculateWithDelivery(cart);
  const cartPriceWithTax = cartService.calculateWithTax(cart);

  return (
    <SummarySection>
      <Typography as={"h2"} marginBottom={px2vw(20)}>
        Итого: {formatCurrency(123)}
      </Typography>
      <Flex flexDirection={"column"} gap={px2vw(15)}>
        <Flex>
          <img src={boxIcon} alt="box-icon"/>
          <Typography marginLeft={px2vw(15)}>
            Стоимость товаров:{" "}
            {formatCurrency(totalPrice)}
          </Typography>
        </Flex>
        <Flex>
          <img src={percentIcon} alt="percent-icon"/>
          <Typography marginLeft={px2vw(15)}>
            Налог:{" "}
            {formatCurrency(cartPriceWithTax)}
          </Typography>
        </Flex>
        <Flex>
          <img src={deliveryIcon} alt="delivery-icon"/>
          <Typography as={"p"} marginLeft={px2vw(15)}>
            Доставка:{" "}
            {formatCurrency(cartPriceWithDelivery)}
          </Typography>
        </Flex>
      </Flex>
    </SummarySection>
  );
};
