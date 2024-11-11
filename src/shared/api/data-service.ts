import axios from "axios";
import {ProductDtoResponse} from "@/shared/types/products";
import {ProductParams} from "@/shared/types/productParams";
import {createQuery} from "@/utils";
import {CartItemDto, CartItemDtoResponse} from "@/shared/types/cart";

const baseURL = "http://localhost:3001";

const productApi = axios.create({
  baseURL,
});

export const dataService = {
  fetchProducts: (params: ProductParams) => {
    const query = createQuery(params);
    const urlWithParams = `/products?${query}`;

    return productApi.get<ProductDtoResponse>(urlWithParams);
  },

  fetchCartItems: () => {
    return productApi.get<CartItemDtoResponse>("/cart");
  },
  addToCart: (product: CartItemDto) => {
    return productApi.post("/cart", product);
  },

  updateQuantity: (id: string | number, quantity: number) => {
    return productApi.patch(`/cart/${id}`, {quantity});
  },

  removeFromCart: (id: string) => {
    return productApi.delete(`/cart/${id}`);
  },
};
