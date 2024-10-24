import React, { useState } from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { TProduct } from "@/shared/types/products";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { formatCurrency, getProductDetails, px2vw, remCalc } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import { PRODUCT_TYPE } from "@/shared/utils";
import { Ingredients } from "@/components/UI/Ingredients/Ingredients";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import { useAddItemToCart } from "@/shared/hooks/useAddToCart";

interface ProductModalProps extends TProduct {
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
  const addToCart = useAddItemToCart({
    imageSrc,
    cart,
    ingredients,
    selectedType: selectedOptions.type,
    title,
    id: Number(id),
    selectedIngredient,
    selectedOffer: offers[selectedOptions.size],
  });

  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      background={"rgba(0, 0, 0, 0.5)"}
      zIndex={1000}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
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
          <Flex position={"absolute"} top={2} right={2}>
            <Button onClick={() => onClose()}>X</Button>
          </Flex>
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
            {types.map((type, index) => (
              <Button
                key={`type-${index}`}
                $variant={"options"}
                $isActive={selectedOptions.type === index}
                onClick={() =>
                  setSelectedOptions((prev) => ({ ...prev, type: index }))
                }
              >
                {PRODUCT_TYPE[type]}
              </Button>
            ))}
          </Flex>
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
          <Button $variant={"add"} onClick={() => addToCart()}>
            Добавить в корзину{" "}
            {formatCurrency(offers[selectedOptions.size].price)}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
