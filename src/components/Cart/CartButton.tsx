import React from "react";
import { Button } from "../UI/Button/Button.tsx";
import { formatCurrency } from "../../utils/formatCurrency.ts";
import { calculateTotalQnt, totalPrice } from "../../utils";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/useStore.ts";
import { selectCartItems } from "../../redux/reducers/cart/slice.ts";

export const CartButton = () => {
  const cartItem = useAppSelector(selectCartItems);
  const quantityTotal = calculateTotalQnt(cartItem);

  return (
    <Link to="/cart">
      <Button $variant="header">
        {formatCurrency(totalPrice(cartItem))}
        <img src="src/assets/cart.svg" alt="cart" />
        {quantityTotal > 0 && <span>{quantityTotal}</span>}
      </Button>
    </Link>
  );
};
