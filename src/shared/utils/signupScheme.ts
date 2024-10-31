import { object, string } from "yup";

const numberRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const SignupScheme = object().shape({
  firstName: string().required("Введите свое имя"),
  lastName: string().required("Введите свою фамилию"),
  email: string().required("Введите свою почту"),
  phone: string()
    .matches(numberRegExp, "Некорректный формат номера телефона")
    .required(
      "Введите свой номер телефона, обязательно укажите код страны и без пробелов",
    ),
});
