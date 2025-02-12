import {useMutation} from "@tanstack/react-query";
import {dataService} from "@/shared/api/data-service";
import {queryClient} from "@/index";

export const useRemoveFromCart = () => {
  const {mutate: removeFromCartMutation} = useMutation({
    mutationFn: (id: number) => dataService.removeFromCart(id),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["cart"]}),
  });

  return removeFromCartMutation;
};
