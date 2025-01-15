export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined) {
    return "N/A";
  }
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
};
