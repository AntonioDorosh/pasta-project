import React from "react";
import { Header } from "@/components/Layouts/Header/Header";
import { Container } from "@/components/Layouts/Container/Container";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { formatCurrency, px2vw, remCalc } from "@/utils";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { QuantityControl } from "@/components/QuantityControl/QuantityControl";
import { Button } from "@/components/UI/Button/Button";
import { useRemoveFromCart } from "@/shared/hooks/useRemoveFromCart";
import { EmptyCart } from "@/components/EmptyCart/EmptyCart";

export const Cart = () => {
  const { cart } = useFetchCart();
  const removeFromCart = useRemoveFromCart();

  return (
    <Container $bgColor={"#F4F1EE"}>
      <Header />
      {!cart?.length ? (
        <EmptyCart $minHeight={"100vh"} />
      ) : (
        <>
          <Typography
            fontSize={remCalc(36)}
            fontWeight={800}
            marginBottom={px2vw(48)}
          >
            Оформление заказа
          </Typography>
          <Flex
            background={"#FFFFFF"}
            flexDirection={"column"}
            maxWidth={"780px"}
            borderRadius={"30px"}
            padding={30}
          >
            <Typography
              marginBottom={px2vw(61)}
              fontWeight={700}
              fontSize={remCalc(24)}
            >
              Корзина
            </Typography>
            <Flex>
              {cart?.map((item) => (
                <Flex alignItems={"center"}>
                  <img width={"65px"} src={item.imageSrc} alt={item.title} />
                  <Flex flexDirection={"column"} marginLeft={px2vw(20)}>
                    <Typography>{item.title}</Typography>
                    <Typography color={"#A1A1A1"}>
                      {item.offers.size} {item.offers.numericSize} см,
                      {item.type && item.type.toLowerCase()} тесто
                    </Typography>
                  </Flex>
                  <Flex margin={"0 100px 0 100px"}>
                    <Typography fontWeight={700}>
                      {formatCurrency(item.price)}
                    </Typography>
                  </Flex>
                  <QuantityControl quantity={item.quantity} id={item.id} />
                  <Button
                    marginLeft={px2vw(20)}
                    onClick={() => removeFromCart(item.id!)}
                  >
                    X
                  </Button>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </>
      )}
    </Container>
  );
};
