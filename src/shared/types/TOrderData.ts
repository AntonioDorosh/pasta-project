import {CartItemDto} from "@/shared/types/cart";

export type TOrderData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cartItems: CartItemDto[]
}