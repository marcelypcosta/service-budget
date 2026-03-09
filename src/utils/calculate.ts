import { Budget } from "@/types/budget";

export const calculateSubtotal = (budget: Budget) => {
  if (!budget) return 0;
  return budget.services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0,
  );
};

export const calculateDiscountValue = (budget: Budget) => {
  if (!budget) return 0;
  const subTotal = calculateSubtotal(budget);
  return (subTotal * (budget.discountPct || 0)) / 100;
};

export const calculateTotal = (budget: Budget) => {
  const subTotal = calculateSubtotal(budget);
  const discount = calculateDiscountValue(budget);
  return subTotal - discount;
};
