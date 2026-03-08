import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { storageItems } from "@/storage/BudgetStorage";
import { Budget } from "@/types/budget";

export function useDetailsViewModel(id: string) {
  const [budget, setBudget] = useState<Budget | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const fetchBudget = async () => {
    try {
      setIsLoading(true);
      const data = await storageItems.getById(Number(id));
      if (data) {
        setBudget(data);
      } else {
        // Se não encontrar, volta para a home
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
      navigation.goBack();
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBudget();
    }, [id])
  );

  const calculateSubtotal = () => {
    if (!budget) return 0;
    return budget.services.reduce(
      (acc, service) => acc + service.price * service.quantity,
      0
    );
  };

  const calculateDiscountValue = () => {
    if (!budget) return 0;
    const subTotal = calculateSubtotal();
    return (subTotal * (budget.discountPct || 0)) / 100;
  };

  const calculateTotal = () => {
    const subTotal = calculateSubtotal();
    const discount = calculateDiscountValue();
    return subTotal - discount;
  };

  return {
    budget,
    isLoading,
    calculateSubtotal,
    calculateDiscountValue,
    calculateTotal,
  };
}
