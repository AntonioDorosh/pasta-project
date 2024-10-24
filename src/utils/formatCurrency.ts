const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "UAH",
  style: "currency",
});

export const formatCurrency = (num: number) => CURRENCY_FORMATTER.format(num);
