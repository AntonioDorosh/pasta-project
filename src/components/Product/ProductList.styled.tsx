import styled from "styled-components";
import { px2vw } from "@/utils";

export const ProductListStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${px2vw(20)};
  padding: ${px2vw(20)};

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${px2vw(15)};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: ${px2vw(10)};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${px2vw(5)};
  }
`;
