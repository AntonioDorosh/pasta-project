import React from "react";
import { Header } from "@/components/Layouts/Header/Header";
import { Container } from "@/components/Layouts/Container/Container";
import { EmptyCart } from "@/components/EmptyCart/EmptyCart";
import {
  Footer,
  FormSection,
  Layout,
  OrderButton,
} from "@/pages/Order/Order.styled";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { Form } from "@/components/UI/Form/Form";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { Button } from "@/components/UI/Button/Button";
import { Link } from "react-router-dom";
import { OrderCartSection, OrderSummarySection } from "@/components/Order";

export const Order = () => {
  const { cart } = useFetchCart();

  return (
    <Container $bgColor={"#F4F1EE"}>
      <Header />
      {!cart?.length ? (
        <EmptyCart $minHeight={"50vh"} />
      ) : (
        <Layout>
          <OrderCartSection />
          <OrderSummarySection />
          <FormSection>
            <Form />
          </FormSection>
          <Flex as={Footer}>
            <Link to={"/"}>
              <Button
                backgroundColor={"#ff5722"}
                color={"#FFFFFF"}
                p={10}
                borderRadius={"5px"}
              >
                Вернуться к покупкам
              </Button>
            </Link>
            <OrderButton>Перейти к оплате</OrderButton>
          </Flex>
        </Layout>
      )}
    </Container>
  );
};
