import {TIngredients} from "@/shared/types/products";

type TOffers = {
  productId: number;
  price: number;
  size: string;
  numericSize?: number;
  weight?: number;
  discount?: number;
};

export type CartItemDto = {
  id: number;
  title: string;
  price: number;
  description?: string;
  imageSrc: string;
  type?: string;
  ingredients: TIngredients[];
  offers: TOffers;
  quantity: number;
};

export type CartItemDtoWithoutId = Omit<CartItemDto, 'id'>

export type CartItemDtoResponse = CartItemDto[] | undefined;
