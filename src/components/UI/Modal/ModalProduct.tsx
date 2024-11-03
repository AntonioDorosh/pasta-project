import React, { useState } from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { ProductDto } from "@/shared/types/products";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { formatCurrency, getProductDetails, px2vw, remCalc } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import { Ingredients } from "@/components/UI/Ingredients/Ingredients";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { useAddToCart } from "@/shared/hooks/useAddToCart";
import { cartService } from "@/utils/cart-service";
import { OfferOptions } from "@/components/Offer/OfferOptions";
import { ModalWrapper } from "@/components/UI/Modal/ModalWrapper";

interface ProductModalProps extends ProductDto {
  isOpenModal: boolean;
  onClose: () => void;
}

export const ModalProduct = ({
  isOpenModal,
  onClose,
  ...rest
}: ProductModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    size: number;
    type: number;
  }>({
    size: 0,
    type: 0,
  });
  const [selectedIngredient, setSelectedIngredient] = useState<number[]>([]);
  const { title, imageSrc, offers, types, ingredients, id } = rest;
  const modalRef = useOutsideClick(isOpenModal, onClose);
  const { cart } = useFetchCart();
  const addToCart = useAddToCart();
  const addToCartHandler = () =>
    addToCart({
      imageSrc,
      cart,
      ingredients,
      selectedType: selectedOptions.type,
      title,
      id: Number(id),
      selectedIngredient,
      selectedOffer: offers[selectedOptions.size],
    });

  const totalPrice = cartService.calculatePriceWithIngredients({
    offers,
    selectedSize: selectedOptions.size,
    ingredients,
    selectedIngredients: selectedIngredient,
  });

  return (
    <ModalWrapper onClose={onClose}>
      <Flex background={"#FFFFFF"} ref={modalRef} borderRadius={"30px"}>
        <Flex justifyContent={"center"} alignItems={"center"} flexBasis={"50%"}>
          <img src={imageSrc} alt={title} />
        </Flex>
        <Flex
          flexDirection={"column"}
          flexBasis={"50%"}
          padding={30}
          background={"#F4F1EE"}
          position={"relative"}
        >
          <Typography fontSize={remCalc(24)} fontWeight={800}>
            {title}
          </Typography>
          <Typography
            fontSize={remCalc(14)}
            color={"#777777"}
            marginBottom={px2vw(20)}
          >
            {getProductDetails(
              offers,
              selectedOptions.size,
              selectedOptions.type,
            )}
          </Typography>
          <Button $variant={"close"} onClick={onClose} />
          <OfferOptions
            offers={offers}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            types={types}
          />
          <Typography
            fontSize={remCalc(18)}
            fontWeight={700}
            marginBottom={px2vw(16)}
          >
            Добавить по вкусу
          </Typography>
          <Ingredients
            ingredients={ingredients}
            selectedIngredient={selectedIngredient}
            setSelectedIngredient={setSelectedIngredient}
          />
          <Button $variant={"add"} onClick={addToCartHandler}>
            Добавить в корзину {formatCurrency(totalPrice)}
          </Button>
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};
