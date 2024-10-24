import { useMutation } from "@tanstack/react-query";
import { dataService } from "@/shared/api/data-service";
import { queryClient } from "@/shared/utils";

export const useRemoveFromCart = () => {
  const { mutate: removeFromCartMutation } = useMutation({
    mutationFn: (id: string) => dataService.removeFromCart(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return { removeFromCartMutation };
};
