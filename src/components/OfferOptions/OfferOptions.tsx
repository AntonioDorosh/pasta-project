import React, { useEffect } from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { px2vw } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import { PRODUCT_TYPE } from "@/shared/utils";
import { TOffers } from "@/shared/types/products";

type OfferOptionsProps = {
  offers: TOffers[];
  options: {
    selectedOptions: {
      size: number;
      type: number;
    };
    setSelectedOptions: React.Dispatch<
      React.SetStateAction<{
        size: number;
        type: number;
      }>
    >;
  };
  types: number[];
};

export const OfferOptions = ({
  offers,
  types,
  options: { selectedOptions, setSelectedOptions },
}: OfferOptionsProps) => {
  const inSmallSizeSelected = offers[selectedOptions.size].size === "Маленькая";

  useEffect(() => {
    if (inSmallSizeSelected) {
      setSelectedOptions((prev) => ({ ...prev, type: 0 }));
    }
  }, [inSmallSizeSelected, setSelectedOptions]);

  return (
    <>
      <Flex
        background={"rgb(243,243, 247)"}
        borderRadius={"30px"}
        marginBottom={px2vw(12)}
      >
        {offers.map((offer, index) => (
          <Button
            key={`offer-${index}`}
            $variant={"options"}
            $isActive={selectedOptions.size === index}
            onClick={() =>
              setSelectedOptions((prev) => ({ ...prev, size: index }))
            }
          >
            {offer.size}
          </Button>
        ))}
      </Flex>
      <Flex
        background={"rgb(243,243, 247)"}
        borderRadius={"30px"}
        marginBottom={px2vw(30)}
      >
        {types.map((type, index) => {
          const isDisabled =
            inSmallSizeSelected && PRODUCT_TYPE[type] === "Тонкое";

          return (
            <Button
              key={`type-${index}`}
              $variant={"options"}
              $isDisabled={isDisabled}
              $isActive={selectedOptions.type === index}
              onClick={() =>
                !isDisabled &&
                setSelectedOptions((prev) => ({ ...prev, type: index }))
              }
            >
              {PRODUCT_TYPE[type]}
            </Button>
          );
        })}
      </Flex>
    </>
  );
};
