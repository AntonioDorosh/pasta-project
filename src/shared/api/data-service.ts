import axios from "axios";
import { TProductsResponseQuery } from "@/shared/types/products";
import { ProductParams } from "@/shared/types/productParams";
import { createQuery } from "@/utils";
import { TCartItem, TCartItemQueryResponse } from "@/shared/types/cart";

const baseURL = "http://localhost:3001";

const productApi = axios.create({
  baseURL,
});

export const dataService = {
  fetchProducts: (params: ProductParams) => {
    const query = createQuery(params);
    const urlWithParams = `/products?${query}`;

    return productApi.get<TProductsResponseQuery>(urlWithParams);
  },

  fetchCartItems: () => {
    return productApi.get<TCartItemQueryResponse>("/cart");
  },
  addToCart: (product: TCartItem) => {
    return productApi.post("/cart", product);
  },

  updateQuantity: (id: string | number, quantity: number) => {
    return productApi.patch(`/cart/${id}`, { quantity });
  },

  removeFromCart: (id: string) => {
    return productApi.delete(`/cart/${id}`);
  },
};
