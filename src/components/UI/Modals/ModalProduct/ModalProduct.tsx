import React, {useState} from "react";
import {ProductDto} from "@/shared/types/products";
import {useFetchCart} from "@/shared/hooks/useFetchCart";
import {useAddToCart} from "@/shared/hooks/useAddToCart";
import {ModalWrapper} from "@/components/UI/Modals/ModalWrapper/ModalWrapper";
import {useOutsideClick} from "@/shared/hooks/useOutsideClick";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {formatCurrency, getProductDetails, px2vw, remCalc} from "@/utils";
import {Button} from "@/components/UI/Buttons/Button/Button";
import {OfferOptions} from "@/components/Offers/OfferOptions";
import {Ingredients} from "@/components/UI/Ingredients/Ingredients";
import {COLORS} from "@/constants/constants";
import {cartService} from "@/utils/cart-service";

type SelectedOptionsProps = {
  size: number;
  type: number;
};

interface ProductModalProps extends ProductDto {
  isOpenModal: boolean;
  onClose: () => void;
}

export const ModalProduct = ({
                               isOpenModal,
                               onClose,
                               ...rest
                             }: ProductModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsProps>({
    size: 0,
    type: 0,
  });

  const [selectedIngredient, setSelectedIngredient] = useState<number[]>([]);
  const {title, imageSrc, offers, types, ingredients, id} = rest;
  const {type: selectedType, size: selectedSize} = selectedOptions;
  const showProductOptions = getProductDetails(offers, selectedSize, selectedType);

  const {cart: cartItems} = useFetchCart();
  const addToCart = useAddToCart();
  const modalRef = useOutsideClick(isOpenModal, onClose);
  const getTotalPriceWithIngredients = formatCurrency(cartService.calculatePriceWithIngredients({
    ingredients,
    selectedIngredients: selectedIngredient,
    offers,
    selectedSize
  }))

  const addToCartHandler = () =>
    addToCart({
      imageSrc,
      cartItems,
      ingredients,
      selectedType,
      title,
      id,
      selectedIngredient,
      selectedOffer: offers[selectedSize],
    });

  if (!isOpenModal) return null;

  return (
    <ModalWrapper>
      <Flex background={COLORS.white} ref={modalRef} borderRadius={"30px"} minWidth={'1000px'}>
        <Flex justifyContent={"center"} alignItems={"center"} flexBasis={"50%"}>
          <img src={imageSrc} alt={title}/>
        </Flex>
        <Flex
          flexDirection={"column"}
          padding={30}
          background={COLORS.lightGray}
          position={"relative"}
        >
          <Typography fontSize={remCalc(24)} fontWeight={800}>
            {title}
          </Typography>
          <Typography
            fontSize={remCalc(14)}
            color={COLORS.gray}
            marginBottom={px2vw(20)}
          >
            {showProductOptions}
          </Typography>
          <Button $variant={"close"} onClick={onClose}/>
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
            Добавить в корзину{" "}
            {getTotalPriceWithIngredients}
          </Button>
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};
