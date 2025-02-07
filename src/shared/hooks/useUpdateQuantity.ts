import {dataService} from "@/shared/api/data-service";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@/shared/utils";

const updateQuantityHandler = ({
                                 id,
                                 quantity,
                               }: {
  id: string;
  quantity: number;
}) => {
  return quantity < 1 ? dataService.removeFromCart(id) : dataService.updateQuantity(id, quantity);
};

export const useUpdateQuantity = () => {
  const {mutate: updateQuantityMutation} = useMutation({
    mutationFn: ({id, quantity}: { id: string; quantity: number }) =>
      updateQuantityHandler({id, quantity}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["cart"]}),
  });

  return updateQuantityMutation;
};
