import React from "react";
import {
  FormContainer,
  FormikButton,
  Input,
  Label,
  SectionTitle,
} from "@/components/UI/Form/Form.styled";
import { useFormik } from "formik";
import * as Yup from "yup";

type FormikValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const initialFormikValues: FormikValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const SignupScheme = Yup.object().shape({
  firstName: Yup.string().required("Введите свое имя"),
  lastName: Yup.string().required("Введите свою фамилию"),
  email: Yup.string().required("Введите свою почту"),
  phone: Yup.string()
    .matches(
      /^\+\d{1,3} \d{1,4} \d{3} \d{2} \d{2}$/,
      "Некорректный формат номера телефона",
    )
    .required(
      "Введите свой номер телефона, обязательно укажите номер с + в начале",
    ),
});

export const Form = () => {
  const { resetForm, handleChange, errors, values, handleSubmit } = useFormik({
    initialValues: initialFormikValues,
    validationSchema: SignupScheme,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <FormContainer>
      <SectionTitle>2. Персональная информация</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={"firstName"}>Имя</Label>
        <Input
          name={"firstName"}
          id={"firstName"}
          type={"text"}
          onChange={handleChange}
          value={values.firstName}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        <Label htmlFor={"lastName"}>Фамилия</Label>
        <Input
          name={"lastName"}
          id={"lastName"}
          type={"text"}
          onChange={handleChange}
          value={values.lastName}
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        <Label htmlFor={"email"}>Email</Label>
        <Input
          name={"email"}
          id={"email"}
          type={"email"}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <Label htmlFor={"phone"}>Телефон</Label>
        <Input
          name={"phone"}
          id={"phone"}
          type={"tel"}
          onChange={handleChange}
          value={values.phone}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        <FormikButton type={"submit"}>Отправить</FormikButton>
      </form>
    </FormContainer>
  );
};
