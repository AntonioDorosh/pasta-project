import {useMutation} from "@tanstack/react-query";
import {dataService} from "@/shared/services/api/data-service";
import {queryClient} from "@/index";
import {QUERY_KEY_CART} from "@/constants/constants";

export const useRemoveFromCart = () => {
  const {mutate: removeFromCartMutation} = useMutation({
    mutationFn: (id: number) => dataService.removeFromCart(id),
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY_CART]}),
  });

  return removeFromCartMutation;
};
