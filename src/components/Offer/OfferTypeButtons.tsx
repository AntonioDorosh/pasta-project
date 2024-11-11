import React from "react";
import {px2vw} from "@/utils";
import {PRODUCT_TYPE} from "@/shared/utils";
import {Button} from "@/components/UI/Button/Button";
import Flex from "@/shared/styles/styled-components/Flex/Flex";

type OfferTypeButtonsProps = {
  types: number[];
  selectedType: number;
  onSelectType: (typeIndex: number) => void;
  isSmallSizeSelected: boolean;
};

export const OfferTypeButtons = ({
                                   types,
                                   selectedType,
                                   onSelectType,
                                   isSmallSizeSelected,
                                 }: OfferTypeButtonsProps) => {
  return (
    <Flex
      background={"rgb(243,243, 247)"}
      borderRadius={"30px"}
      marginBottom={px2vw(30)}
    >
      {types.map((type, index) => {
        const isDisabled =
          isSmallSizeSelected && PRODUCT_TYPE[type] === "Тонкое";

        return (
          <Button
            key={`type-${index}`}
            $variant={"options"}
            $isDisabled={isDisabled}
            $isActive={selectedType === index}
            onClick={() => !isDisabled && onSelectType(type)}
          >
            {PRODUCT_TYPE[type]}
          </Button>
        );
      })}
    </Flex>
  );
};
