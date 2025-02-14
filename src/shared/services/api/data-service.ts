import axios from "axios";
import {ProductDtoResponse} from "@/shared/types/products";
import {ProductParams} from "@/shared/types/productParams";
import {createQuery} from "@/utils";
import {CartItemDtoResponse, CartItemDtoWithoutId} from "@/shared/types/cart";
import {TOrderData} from "@/shared/types/TOrderData";

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
  addToCart: (product: CartItemDtoWithoutId) => {
    return productApi.post("/cart", product);
  },

  updateQuantity: (id: number, quantity: number) => {
    return productApi.patch(`/cart/${id}`, {quantity});
  },

  removeFromCart: (id: number) => {
    return productApi.delete(`/cart/${id}`);
  },

  submitOrder: (orderData: TOrderData) => {
    return productApi.post('/orders', orderData)
  },
};
