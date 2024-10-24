import { ProductParams } from "@/shared/types/productParams";

export const createQuery = (params: ProductParams) => {
  const { searchTerm, category } = params;
  const searchParams = searchTerm ? `q=${searchTerm}` : "";
  const categoryParams = category ? `category=${category}` : "";

  const queryParams = [categoryParams, searchParams].filter(Boolean).join("&");

  return queryParams ? `${queryParams}` : "";
};
