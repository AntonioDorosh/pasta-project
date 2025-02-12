import {dataService} from "@/shared/api/data-service";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@/index";

const updateQuantityHandler = ({id, quantity,}: { id: number; quantity: number; }) => {
  return quantity < 1 ? dataService.removeFromCart(id) : dataService.updateQuantity(id, quantity);
};

export const useUpdateQuantity = () => {
  const {mutate: updateQuantityMutation} = useMutation({
    mutationFn: ({id, quantity}: { id: number; quantity: number }) =>
      updateQuantityHandler({id, quantity}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["cart"]}),
  });

  return updateQuantityMutation;
};
