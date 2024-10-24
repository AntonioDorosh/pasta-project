import { useQuery } from "@tanstack/react-query";
import { dataService } from "@/shared/api/data-service";
import { ProductParams } from "@/shared/types/productParams";

const QUERY_KEY = "products";

export const useFetchProducts = (params: ProductParams) => {
  const { category, searchTerm } = params;

  const { data: products } = useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () =>
      dataService.fetchProducts({
        category,
        searchTerm,
      }),
    select: ({ data }) => data,
  });

  return { products };
};
