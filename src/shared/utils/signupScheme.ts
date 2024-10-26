import { object, string } from "yup";

export const SignupScheme = object().shape({
  firstName: string().required("Введите свое имя"),
  lastName: string().required("Введите свою фамилию"),
  email: string().required("Введите свою почту"),
  phone: string()
    .matches(
      /^\+\d{1,3} \d{1,4} \d{3} \d{2} \d{2}$/,
      "Некорректный формат номера телефона",
    )
    .required(
      "Введите свой номер телефона, обязательно укажите номер с + в начале",
    ),
});
