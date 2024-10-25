import React from "react";
import { Header } from "@/components/Layouts/Header/Header";
import { Container } from "@/components/Layouts/Container/Container";
import { EmptyCart } from "@/components/EmptyCart/EmptyCart";
import {
  Footer,
  FormSection,
  Layout,
  OrderButton,
} from "@/pages/OrderPage/Order.styled";
import { OrderSummarySection } from "@/components/OrderSummarySection/OrderSummarySection";
import { OrderCartSection } from "@/components/OrderCartSection/OrderCartSection";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { Form } from "@/components/UI/Form/Form";

export const OrderPage = () => {
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
          <Footer>
            <OrderButton>Перейти к оплате</OrderButton>
          </Footer>
        </Layout>
      )}
    </Container>
  );
};
