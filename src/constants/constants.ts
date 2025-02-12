import {object, string} from "yup";
import {sortOptions, TSort} from "@/shared/types/sort";

export const COLORS = {
  primary: '#FE5F00',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  gray: '#777777',
  graySecondary: '#A1A1A1',
  lightGray: '#fff7ee',
};

export const PRODUCT_CATEGORIES = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

export const PRODUCT_TYPE = ["Традиционное", "Тонкое"];

const numberRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

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

export const SORT_LIST: TSort[] = [
  {name: "По умолчанию", sortProperty: sortOptions[0]},
  {name: "По цене (ASC)", sortProperty: sortOptions[1]},
  {name: "По цене (DESC)", sortProperty: sortOptions[2]},
  {name: "По названию (ASC)", sortProperty: sortOptions[3]},
  {name: "По названию (DESC)", sortProperty: sortOptions[4]},
];
