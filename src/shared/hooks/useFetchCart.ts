import {useQuery} from "@tanstack/react-query";
import {dataService} from "@/shared/api/data-service";
import {QUERY_KEY_CART} from "@/constants/constants";

export const useFetchCart = () => {
  const {data: cart} = useQuery({
    queryKey: [QUERY_KEY_CART],
    queryFn: dataService.fetchCartItems,
    select: ({data}) => data,
  });

  return {cart};
};
