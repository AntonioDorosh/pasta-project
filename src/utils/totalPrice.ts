import { TCartItem } from '../redux/reducers/cart/type.ts';

export const totalPrice = (cartItem: TCartItem[]) =>
    cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
