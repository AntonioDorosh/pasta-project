import {useQuery} from "@tanstack/react-query";
import {dataService} from "@/shared/services/api/data-service";
import {ProductParams} from "@/shared/types/productParams";
import {QUERY_KEY_PRODUCT} from "@/constants/constants";


export const useFetchProducts = (params: ProductParams) => {
  const {category, searchTerm, sortBy} = params;

  const {data: products} = useQuery({
    queryKey: [QUERY_KEY_PRODUCT, params],
    queryFn: () =>
      dataService.fetchProducts({
        category,
        searchTerm,
        sortBy,
      }),
    select: ({data}) => data,
  });

  return {products};
};
