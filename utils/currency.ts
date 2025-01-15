export const formatCurrency = (amount: number | undefined): string | number => {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount ?? 0);
};
