import React from "react";
import {FormContainer, FormikButton, SectionTitle,} from "@/components/UI/Form/Form.styled";
import {useFormik} from "formik";
import {SignupScheme} from "@/shared/utils";
import {useSubmitForm} from "@/shared/hooks/useSubmitForm";
import {FormField} from "@/components/UI/FormField/FormField";

export type FormikValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [key: string]: string;
};

const initialFormikValues: FormikValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const formFields = [
  {name: 'firstName', label: 'Имя', type: 'text'},
  {name: 'lastName', label: 'Фамилия', type: 'text'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'phone', label: 'Телефон', type: 'tel'},
]

export const Form = () => {
  const {isPending, submitFormMutation} = useSubmitForm()

  const {resetForm, handleChange, errors, values, handleSubmit} = useFormik({
    initialValues: initialFormikValues,
    validationSchema: SignupScheme,
    onSubmit: (values) => {
      submitFormMutation(values)

      resetForm()
    },
  });

  return (
    <FormContainer>
      <SectionTitle>2. Персональная информация</SectionTitle>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <FormField key={field.name} name={field.name} label={field.label} type={field.type}
                     onChange={handleChange} value={values[field.name]}/>
        ))}
        {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
        <FormikButton type={"submit"} disabled={isPending}>{
          isPending ? "Отправка..." : "Отправить"
        }</FormikButton>
      </form>
    </FormContainer>
  );
};
