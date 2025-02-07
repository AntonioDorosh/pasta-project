import React from "react";
import {Button} from "@/components/UI/Button/Button";
import cartLogo from "@/assets/images/cart-icon.svg";
import whiteCartLogo from "@/assets/images/cart.svg";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {useFetchCart} from "@/shared/hooks/useFetchCart";
import Flex from "@/shared/styles/styled-components/Flex/Flex";

type CartButtonProps = {
  isOpenCart: boolean;
  setIsOpenCart: (value: boolean) => void;
};

export const CartButton = ({isOpenCart, setIsOpenCart}: CartButtonProps) => {
  const {cart} = useFetchCart();
  const toggleOpenCart = () => setIsOpenCart(!isOpenCart);
  const handleOpenCart = () => setIsOpenCart(true);

  return (
    <Flex>
      {!cart?.length ? (
        <Button
          width={"50px"}
          height={"50px"}
          borderRadius={"15px"}
          border={"1px solid #FE5F00"}
          onClick={handleOpenCart}
        >
          <img
            src={cartLogo}
            alt="cart"
            onClick={toggleOpenCart}
          />
        </Button>
      ) : (
        <Button $variant={"cart"} onClick={handleOpenCart}>
          <img src={whiteCartLogo} alt="cart"/>
          <Typography color={"#FFFFFF"}>{cart?.length}</Typography>
        </Button>
      )}
    </Flex>
  );
};
