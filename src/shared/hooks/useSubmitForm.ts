import {CartItemDto} from "@/shared/types/cart";
import {FormikValues} from "@/components/UI/Form/Form";
import {dataService} from "@/shared/api/data-service";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {queryClient} from "@/index";
import {QUERY_KEY_CART} from "@/constants/constants";

export const handlerSubmitForm = (values: FormikValues) => {
  const cartItems = queryClient.getQueryData([QUERY_KEY_CART]) as CartItemDto[];

  return dataService.submitOrder({
    ...values,
    cartItems
  })
}

export const useSubmitForm = () => {
  const navigate = useNavigate();

  const {mutate: submitFormMutation, isPending} = useMutation({
    mutationFn: (values: FormikValues) => handlerSubmitForm(values),
    onSuccess: () => {
      queryClient.setQueryData([QUERY_KEY_CART], [])

      navigate('/')
    },
    onError: (error) => alert(error)
  })

  return {submitFormMutation, isPending}
}