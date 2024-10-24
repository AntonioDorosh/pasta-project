export type TOffers = {
  productId: number;
  discount: number;
  price: number;
  size: string;
  numericSize: number;
  weight: number;
};
export type TIngredients = {
  ingredientId: number;
  name: string;
  imageSrc: string;
  price: number;
};
export type TProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  category: number;
  types: number[];
  offers: TOffers[];
  ingredients: TIngredients[];
};

export type TProductsResponseQuery = TProduct[] | undefined;
