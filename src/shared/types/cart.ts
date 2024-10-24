import { TIngredients } from "@/shared/types/products";

type TOffers = {
  productId: number;
  price: number;
  size: string;
  numericSize?: number;
  weight?: number;
  discount?: number;
};

export type CartItemDto = {
  id?: string;
  title: string;
  price: number;
  description?: string;
  imageSrc: string;
  type?: string;
  ingredients: TIngredients[];
  offers: TOffers;
  quantity: number;
};

export type CartItemDtoResponse = CartItemDto[] | undefined;
