import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {useOutsideClick} from "@/shared/hooks/useOutsideClick";
import {useFetchCart} from "@/shared/hooks/useFetchCart";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {px2vw} from "@/utils";
import {Button} from "@/components/UI/Button/Button";
import {EmptyCart} from "@/components/EmptyCart/EmptyCart";
import {ModalCartItem} from "@/components/UI/Modal/ModalCartItem";
import {ModalCartSummary} from "@/components/UI/Modal/ModalCartSummary";

type CartModalProps = {
  isOpenCart: boolean;
  onClose: () => void;
};

export const ModalCart = ({isOpenCart, onClose}: CartModalProps) => {
  const modalRef = useOutsideClick(isOpenCart, onClose);
  const {cart} = useFetchCart();

  console.log('товары в корзине', cart)

  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      background={"rgba(0,0,0, 0.5)"}
      zIndex={1000}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        overflow={"auto"}
        position={"fixed"}
        top={0}
        right={0}
        width={"400px"}
        height={"100vh"}
        background={"#f4f1ee"}
        zIndex={1000}
        ref={modalRef}
      >
        {!cart?.length ? (
          <EmptyCart $minHeight={"100vh"} onClose={onClose}/>
        ) : (
          <>
            <Flex justifyContent={"space-between"} padding={px2vw(20)}>
              <Typography>
                В корзине {cart?.length}{" "}
                {cart?.length === 1 ? "товар" : "товара"}
              </Typography>
              <Button $variant={"close"} onClick={onClose}/>
            </Flex>
            {cart?.map((cartItem) => (
              <ModalCartItem key={cartItem.id} {...cartItem} />
            ))}
            <ModalCartSummary/>
          </>
        )}
      </Flex>
    </Flex>
  );
};
