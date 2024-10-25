import { ProductParams } from "@/shared/types/productParams";
import { TSort } from "@/shared/types/sort";

const createSortParams = (sortBy?: TSort | undefined) => {
  return sortBy && sortBy.sortProperty.field !== "default"
    ? `_sort=${sortBy.sortProperty.field}&_order=${sortBy.sortProperty.order}`
    : "";
};

export const createQuery = (params: ProductParams) => {
  const { searchTerm, category, sortBy } = params;
  const searchParams = searchTerm ? `q=${searchTerm}` : "";
  const categoryParams = category ? `category=${category}` : "";
  const sortByParams = createSortParams(sortBy);

  const queryParams = [categoryParams, searchParams, sortByParams]
    .filter(Boolean)
    .join("&");

  return queryParams ? `${queryParams}` : "";
};
