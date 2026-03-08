import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { storageItems } from "@/storage/BudgetStorage";
import { Budget } from "@/types/budget";

export function useHomeViewModel() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBudgets = async () => {
    try {
      setIsLoading(true);
      const data = await storageItems.getAll();
      // Ordenar por data de criação (mais recente primeiro)
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setBudgets(sortedData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBudgets();
    }, [])
  );

  const calculateBudgetTotal = (budget: Budget) => {
    const subTotal = budget.services.reduce(
      (acc, service) => acc + service.price * service.quantity,
      0
    );
    const discountValue = (subTotal * (budget.discountPct || 0)) / 100;
    return subTotal - discountValue;
  };

  return {
    budgets,
    isLoading,
    calculateBudgetTotal,
    fetchBudgets,
  };
}
