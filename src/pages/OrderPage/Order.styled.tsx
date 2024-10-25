import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header"
    "cart summary"
    "form summary"
    "footer footer";
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
`;

export const CartSection = styled.section`
  grid-area: cart;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SummarySection = styled.section`
  grid-area: summary;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormSection = styled.section`
  grid-area: form;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const OrderButton = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
