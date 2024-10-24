import { useQuery } from "@tanstack/react-query";
import { dataService } from "@/shared/api/data-service";

const QUERY_KEY = "cart";

export const useFetchCart = () => {
  const { data: cart } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: dataService.fetchCartItems,
    select: ({ data }) => data,
  });

  return { cart };
};
