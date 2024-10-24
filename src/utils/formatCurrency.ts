const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "UAH",
  style: "currency",
});

export const formatCurrency = (num: number | undefined) =>
  CURRENCY_FORMATTER.format(num || 0);
