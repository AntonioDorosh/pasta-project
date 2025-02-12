import {TOffers} from "@/shared/types/products";
import {PRODUCT_TYPE} from "@/constants/constants";

export const getProductDetails = (
  offers: TOffers[],
  selectedSize: number,
  selectedType: number,
) => {
  return `${offers[selectedSize].numericSize} см, ${PRODUCT_TYPE[selectedType]} тесто, ${offers[selectedSize].weight} г`;
};
