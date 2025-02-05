import {queryClient} from "@/shared/utils";
import {CartItemDto} from "@/shared/types/cart";
import {FormikValues} from "@/components/UI/Form/Form";
import {dataService} from "@/shared/api/data-service";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

export const handlerSubmitForm = (values: FormikValues) => {
  const cartItems = queryClient.getQueryData(['cart']) as CartItemDto[];

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
      queryClient.setQueryData(['cart'], [])

      navigate('/')
    },
    onError: (error) => alert(error)
  })

  return {submitFormMutation, isPending}
}