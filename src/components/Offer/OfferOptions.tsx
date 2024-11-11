import React, {useEffect, useMemo} from "react";
import {TOffers} from "@/shared/types/products";
import {OfferSizeButton} from "@/components/Offer/OfferSizeButtons";
import {OfferTypeButtons} from "@/components/Offer/OfferTypeButtons";

type SelectedOptions = {
  size: number;
  type: number;
};

type OfferOptionsProps = {
  offers: TOffers[];
  selectedOptions: SelectedOptions;
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>;
  types: number[];
};

const SMALL_SIZE_LABEL = "Маленькая";

export const OfferOptions = ({
                               offers,
                               types,
                               selectedOptions,
                               setSelectedOptions,
                             }: OfferOptionsProps) => {
  const isSmallSizeSelected = useMemo(() => {
    return offers[selectedOptions.size].size === SMALL_SIZE_LABEL;
  }, [offers, selectedOptions.size]);

  useEffect(() => {
    if (isSmallSizeSelected) {
      setSelectedOptions((prev) => ({...prev, type: 0}));
    }
  }, [isSmallSizeSelected, setSelectedOptions]);

  const handleSelectSize = (sizeIndex: number) =>
    setSelectedOptions((prev) => ({...prev, size: sizeIndex}));

  const handleSelectType = (typeIndex: number) =>
    setSelectedOptions((prev) => ({...prev, type: typeIndex}));

  return (
    <>
      <OfferSizeButton
        offers={offers}
        selectedSize={selectedOptions.size}
        onSelectedSize={handleSelectSize}
      />
      <OfferTypeButtons
        types={types}
        selectedType={selectedOptions.type}
        onSelectType={handleSelectType}
        isSmallSizeSelected={isSmallSizeSelected}
      />
    </>
  );
};
