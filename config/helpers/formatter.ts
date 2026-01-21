export const formatterCurrency = (value: number) => {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
