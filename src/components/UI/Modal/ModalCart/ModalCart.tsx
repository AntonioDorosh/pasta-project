import React from "react";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { useFetchCart } from "@/shared/hooks/useFetchCart";
import emptyLogo from "@/assets/images/empty-cart.svg";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { px2vw, remCalc } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import { ModalCartItem } from "@/components/UI/Modal/ModalCartItem/ModalCartItem";

type CartModalProps = {
  isOpenCart: boolean;
  onClose: () => void;
};

export const ModalCart = ({ isOpenCart, onClose }: CartModalProps) => {
  const modalRef = useOutsideClick(isOpenCart, onClose);
  const { cart } = useFetchCart();

  console.log(cart);

  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      background={"rgba(0,0, 0, 0.5)"}
      zIndex={1000}
      width={"100%"}
      height={"100%"}
    >
      <Flex
        display={"block"}
        as={"aside"}
        position={"fixed"}
        top={0}
        right={0}
        width={"400px"}
        height={"100vh"}
        zIndex={1000}
        background={"#F4F1EE"}
        ref={modalRef}
      >
        {!cart?.length ? (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100vh"}
          >
            <img src={emptyLogo} alt="empty-cart" />
            <Typography fontSize={remCalc(22)} fontWeight={700}>
              Корзина пуста
            </Typography>
            <Typography
              color={"#777777"}
              textAlign={"center"}
              marginBottom={px2vw(37)}
            >
              Добавьте хотя бы одну пиццу, чтобы совершить заказ
            </Typography>
            <Button
              onClick={onClose}
              width={"230px"}
              height={"55px"}
              backgroundColor={"#FE5F00"}
              color={"#FFFFFF"}
              borderRadius={"18px"}
            >
              Вернуться назад
            </Button>
          </Flex>
        ) : (
          <>
            <Flex
              padding={10}
              justifyContent={"space-between"}
              marginBottom={px2vw(20)}
            >
              <Typography>
                В корзине {cart?.length}{" "}
                {cart?.length === 1 ? "товар" : "товара"}
              </Typography>
              <Button>X</Button>
            </Flex>
            {cart?.map((cartItem) => (
              <ModalCartItem key={cartItem.id} {...cartItem} />
            ))}
          </>
        )}
      </Flex>
    </Flex>
  );
};
