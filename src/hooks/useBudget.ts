import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { storageItems } from "@/storage/BudgetStorage";
import { Budget } from "@/types/budget";
import { useFilter } from "./useFilter";

export function useHomeViewModel() {
  const [allBudgets, setAllBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Filtra os orçamentos com base na busca e na ordem. */
  const filter = useFilter(allBudgets);

  /* Busca todos os orçamentos. */
  const fetchBudgets = async () => {
    try {
      setIsLoading(true);
      const data = await storageItems.getAll();
      setAllBudgets(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  /* Busca todos os orçamentos quando a tela ganha foco. */
  useFocusEffect(
    useCallback(() => {
      fetchBudgets();
    }, [])
  );

  return {
    budgets: filter.filteredBudgets,
    isLoading,
    fetchBudgets,
    filter,
  };
}
