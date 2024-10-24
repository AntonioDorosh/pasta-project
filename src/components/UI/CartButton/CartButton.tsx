import React from "react";
import { Button } from "@/components/UI/Button/Button";
import cartLogo from "@/assets/images/cart-icon.svg";
import whiteCartLogo from "@/assets/images/cart.svg";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { useFetchCart } from "@/shared/hooks/useFetchCart";

type CartButtonProps = {
  isOpenCart: boolean;
  setIsOpenCart: (value: boolean) => void;
};

export const CartButton = ({ isOpenCart, setIsOpenCart }: CartButtonProps) => {
  const { cart } = useFetchCart();

  return (
    <>
      {!cart?.length ? (
        <Button
          width={"50px"}
          height={"50px"}
          borderRadius={"15px"}
          border={"1px solid #FE5F00"}
          onClick={() => setIsOpenCart(true)}
          marginLeft={"auto"}
        >
          <img
            src={cartLogo}
            alt="cart"
            onClick={() => setIsOpenCart(!isOpenCart)}
          />
        </Button>
      ) : (
        <Button
          marginLeft={"auto"}
          borderRadius={"15px"}
          backgroundColor={"#FE5F00"}
          width={"150px"}
          height={"50px"}
          onClick={() => setIsOpenCart(true)}
        >
          <img src={whiteCartLogo} alt="cart" />
          <Typography>{cart?.length}</Typography>
        </Button>
      )}
    </>
  );
};
