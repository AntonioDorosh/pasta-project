import React, {useEffect, useMemo} from "react";
import {TOffers} from "@/shared/types/products";
import {OfferSizeButton} from "@/components/Offers/OfferSizeButtons";
import {OfferTypeButtons} from "@/components/Offers/OfferTypeButtons";

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

export const OfferOptions = (props: OfferOptionsProps) => {
  const {offers, setSelectedOptions, selectedOptions, types} = props;

  const {size: selectedSize, type: selectedType} = selectedOptions;

  const isSmallSizeSelected = useMemo(() => {
    return offers[selectedSize].size === SMALL_SIZE_LABEL;
  }, [offers, selectedSize]);

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
        selectedSize={selectedSize}
        onSelectedSize={handleSelectSize}
      />
      <OfferTypeButtons
        types={types}
        selectedType={selectedType}
        onSelectType={handleSelectType}
        isSmallSizeSelected={isSmallSizeSelected}
      />
    </>
  );
};
