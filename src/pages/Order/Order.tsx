import React from "react";
import {Header} from "@/components/Layouts/Header/Header";
import {Container} from "@/components/Layouts/Container/Container";
import {EmptyCart} from "@/components/EmptyCart/EmptyCart";
import {FormSection, Layout} from "@/pages/Order/Order.styled";
import {useFetchCart} from "@/shared/hooks/useFetchCart";
import {Form} from "@/components/UI/Form/Form";
import {OrderCartSection, OrderSummarySection} from "src/components/Orders";

export const Order = () => {
  const {cart} = useFetchCart();

  return (
    <Container $bgColor={"#F4F1EE"}>
      <Header/>
      {!cart?.length ? (
        <EmptyCart $minHeight={"50vh"}/>
      ) : (
        <Layout>
          <OrderCartSection/>
          <OrderSummarySection/>
          <FormSection>
            <Form/>
          </FormSection>
        </Layout>
      )}
    </Container>
  );
};
