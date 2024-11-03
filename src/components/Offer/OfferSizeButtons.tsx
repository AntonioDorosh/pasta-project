import React from "react";
import { px2vw } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { TOffers } from "@/shared/types/products";

type OfferSizeButtonsProps = {
  offers: TOffers[];
  selectedSize: number;
  onSelectedSize: (sizeIndex: number) => void;
};

export const OfferSizeButton = ({
  offers,
  onSelectedSize,
  selectedSize,
}: OfferSizeButtonsProps) => {
  return (
    <Flex
      background={"rgb(243,243, 247)"}
      borderRadius={"30px"}
      marginBottom={px2vw(12)}
    >
      {offers.map((offer, index) => (
        <Button
          key={`offer-${index}`}
          $variant={"options"}
          $isActive={selectedSize === index}
          onClick={() => onSelectedSize(index)}
        >
          {offer.size}
        </Button>
      ))}
    </Flex>
  );
};
