import React from "react";
import { useFormik } from "formik";
import {
  FormContainer,
  FormikButton,
  Input,
  Label,
  SectionTitle,
} from "@/components/UI/Form/Form.styled";

const initialFormikValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
};

const validateFormikScheme = (values: typeof initialFormikValues) => {
  const errors: {
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  } = {};
  const onlyDigits = /^\d+$/;
  if (!values.name) {
    errors.name = "Введите ваше имя";
  }
  if (!values.lastName) {
    errors.lastName = "Введите вашу фамилию";
  }
  if (!values.email) {
    errors.email = "Введите ваш email";
  }

  if (!values.phone) {
    errors.phone = "Введите ваш телефон";
  } else if (!onlyDigits.test(values.phone)) {
    errors.phone = "Телефон должен содержать только цифры";
  } else if (values.phone.length < 11) {
    errors.phone = "Телефон должен содержать не менее 11 цифр";
  }

  return errors;
};

export const Form = () => {
  const formik = useFormik({
    initialValues: initialFormikValues,
    validate: (values) => validateFormikScheme(values),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <FormContainer>
      <SectionTitle>2. Персональная информация</SectionTitle>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={!!formik.errors.name}
          />
          {formik.errors.name && (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Фамилия</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={!!formik.errors.lastName}
          />
          {formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
        </div>

        <div>
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={!!formik.errors.email}
          />
          {formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={!!formik.errors.phone}
          />
          {formik.errors.phone && (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          )}
        </div>

        <FormikButton type={"submit"}>Отправить</FormikButton>
      </form>
    </FormContainer>
  );
};
